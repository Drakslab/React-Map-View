import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './mapview.css';
import axios from 'axios';

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const AddPin = ({ onAdd }) => {
  useMapEvents({
    click(e) {
      onAdd({ id: Date.now(), lat: e.latlng.lat, lng: e.latlng.lng, name: 'Nuevo Pin' });
    },
  });
  return null;
};

const Sidebar = ({ selectedPin, onClose }) => {
  if (!selectedPin) return null;
  return (
    <div className="sidebar">
      <h3>Detalles del Pin</h3>
      <p><strong>Nombre:</strong> {selectedPin.name}</p>
      <p><strong>Lat:</strong> {selectedPin.lat}</p>
      <p><strong>Lng:</strong> {selectedPin.lng}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

const MapView = () => {
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);

  // Load pins from backend
  useEffect(() => {
    const fetchPins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pins');
        setPins(response.data);
      } catch (error) {
        console.error('Error al cargar los pins:', error);
      }
    };

    fetchPins();
  }, []);

  // Add a new pin
  const handleAddPin = async (newPin) => {
    try {
      const response = await axios.post('http://localhost:5000/api/pins', newPin);
      setPins([...pins, response.data]); // Actualize state
    } catch (error) {
      console.error('Error al agregar el pin:', error);
    }
  };

  return (
    <div className="map-container">
      <MapContainer center={[-33.4489, -70.6693]} zoom={5} minZoom={3} maxZoom={10} className="map-view">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddPin onAdd={handleAddPin} />
        {pins.map((pin) => (
          <Marker key={pin.id} position={[pin.lat, pin.lng]} icon={customIcon} eventHandlers={{ click: () => setSelectedPin(pin) }}>
            <Popup>{pin.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <Sidebar selectedPin={selectedPin} onClose={() => setSelectedPin(null)} />
    </div>
  );
};

export default MapView;
