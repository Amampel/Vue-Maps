import { MapState } from './map/state';
import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { PlaceState } from './places/state';
import mapModule from './map';


export interface StateInterface {
  places: PlaceState
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})