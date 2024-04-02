import { GetterTree } from 'vuex';
import { PlaceState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlaceState, StateInterface> = {
    isUserLocationReady(state) {
        return !!state.userLocation
    }
}



export default getters;