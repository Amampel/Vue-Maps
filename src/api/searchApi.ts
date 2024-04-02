import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 4,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWFtcGVsOTgiLCJhIjoiY2x1aWJyMWhvMDJzdjJrcWhjbG5majJjbSJ9.f5oB8aWJEjGZbmwdPuW6FA'
    }
})

export default searchApi