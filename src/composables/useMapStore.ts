import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import { LngLat } from "@/store/map/actions";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {

    const store = useStore<StateInterface>();
    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        //Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        //Mutations
        setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),

        //Actions
        getRoutePoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRoutePoints', { start, end })
    }
}