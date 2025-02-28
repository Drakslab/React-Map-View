from flask import Flask, jsonify, request

app = Flask(__name__)

# Lista simulada de pins
pins = [
    { 'id': 1, 'lat': -33.4489, 'lng': -70.6693, 'name': 'Santiago, Chile' },
    { 'id': 2, 'lat': 10.4806, 'lng': -66.9036, 'name': 'Caracas, Venezuela' }
]

# Ruta para obtener los pins
@app.route('/api/pins', methods=['GET'])
def get_pins():
    return jsonify(pins)

# Ruta para agregar un nuevo pin
@app.route('/api/pins', methods=['POST'])
def add_pin():
    new_pin = request.json
    pins.append(new_pin)
    return jsonify(new_pin), 201

if __name__ == '__main__':
    app.run(debug=True)
