# React Map App with Flask Backend

This project is a simple web application that displays an interactive map with pins using **React**, **Leaflet**, and **Flask**. Users can add new pins by clicking on the map, and the details of each pin can be viewed in a sidebar. Additionally, a Flask backend is integrated to simulate data fetching for the pins.

## Features

- **Interactive Map**: Displays a map using [Leaflet](https://leafletjs.com/) with custom markers.
- **Add Pins**: Users can click on the map to add new pins, with the pin details (latitude, longitude, and name) displayed.
- **Sidebar**: A sidebar shows the details of the selected pin.
- **Mock API Backend**: Simulated API calls using **Axios** to fetch pin data from a mock Flask backend.

## Project Structure

```
react-map-app/
│
├── backend/               # Flask backend
│   └── app.py             # Flask app (API for managing pins)
│
├── src/
│    ├── Components/    # React components
         └── MapView.jsx # Map View Component
         └── mapview.css # Map View Styles
│    ├── App.jsx         # React app entry point
│    └── mapview.js     # Map component with pin functionality
│
├── package.json           # React app configuration
└── README.md              # Project documentation
```

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/downloads/)

### 1. Clone the repository

```bash
git clone https://github.com/draklabs/react-map-app.git
cd react-map-app

2. Set up the backend (Flask)

    Navigate to the backend directory.

cd backend

    Create a virtual environment and activate it:

python -m venv venv
source venv/bin/activate  # On Linux/Mac
# or
venv\Scripts\activate  # On Windows

    Install Flask:

pip install Flask

    Create the Flask app in backend/app.py and run the server:

python app.py

The Flask server will run on http://localhost:5000.
3. Set up the frontend (React)

    Navigate to the frontend directory:

    Install the dependencies:

npm install

    Start the development server:

npm run dev

The React app will run on http://localhost:5173.
4. Build and deploy

To create a production build of the React app, run:

npm run build

To preview the build:

npm run preview

Dependencies

    Frontend:
        React
        Leaflet (for map rendering)
        React-Leaflet (for integrating Leaflet with React)
        Axios (for mock API requests)
        React-Bootstrap (for UI components)
    Backend:
        Flask (for serving the mock API)