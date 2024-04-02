import { Feature } from './../../interfaces/places';
import { defineComponent, ref, watch } from "vue";
import { useMapStore, usePlaceStore } from "@/composables";

export default defineComponent({
    name: "SearchResults",
    setup() {

        const { isLoadingPlaces, places, userLocation } = usePlaceStore()
        const { map, setPlaceMarkers, getRoutePoints } = useMapStore()
        const activePlace = ref('')

        watch(places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,
            onPlaceClick: (place: Feature) => {

                const [lng, lat] = place.center;

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            },
            getRouteDirections: (place: Feature) => {
                if (!userLocation.value) return;

                activePlace.value = place.id;
                const [lng, lat] = place.center;
                const [startLng, startLat] = userLocation.value

                const start: [number, number] = [startLng, startLat]
                const end: [number, number] = [lng, lat]

                getRoutePoints(start, end)
            }
        }
    },
})