import { Feature } from './../../interfaces/places';
import { MutationTree } from 'vuex';
import { PlaceState } from './state';


const mutation: MutationTree<PlaceState> = {
    setLngLat(state: PlaceState, { lng, lat }: { lng: number, lat: number }) {
        // a line to prevent linter errors
        console.log([lng, lat]);
        state.userLocation = [lng, lat];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoading = true;
    },

    setPlaces(state, places: Feature[]) {

        state.places = places;
        state.isLoadingPlaces = false;
    }
}


export default mutation;