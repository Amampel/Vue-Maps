import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFtcGVsOTgiLCJhIjoiY2x1aWJyMWhvMDJzdjJrcWhjbG5majJjbSJ9.f5oB8aWJEjGZbmwdPuW6FA'
if (!navigator.geolocation) {
    alert("Your navigator does not support geolocation")
    throw new Error("Your navigator does not support geolocation");
}

createApp(App).use(store).use(router).mount('#app')
