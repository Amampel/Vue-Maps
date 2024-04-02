import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: true,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: true,
        notifications: 'none',
        access_token: 'pk.eyJ1IjoibWFtcGVsOTgiLCJhIjoiY2x1aWJyMWhvMDJzdjJrcWhjbG5majJjbSJ9.f5oB8aWJEjGZbmwdPuW6FA'
    }
})

export default directionsApi