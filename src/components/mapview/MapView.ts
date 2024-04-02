import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMapStore, usePlaceStore } from '@/composables';

export default defineComponent({
    name: "MapView",
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlaceStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error("Something went wrong, please reload the page.");
            if (!userLocation.value) throw new Error("User location undefined, please reload the page and allow location permissions.");

            await Promise.resolve()
            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/light-v11',
                center: userLocation.value,
                zoom: 15
            })

            const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value)
                .setHTML(
                    `<h6 style="font-weight: bold">I'm here</h6>
                <p>${userLocation.value}</p>`
                )

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map)

            setMap(map)
        }


        onMounted(() => {
            if (isUserLocationReady.value) return initMap();
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap();
        })

        return {
            isUserLocationReady,
            mapElement
        }
    },
})