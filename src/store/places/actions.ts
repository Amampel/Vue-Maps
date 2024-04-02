import { ActionTree } from 'vuex';
import { PlaceState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/api';
import { PlaceResponse, Feature } from '@/interfaces/places';


const actions: ActionTree<PlaceState, StateInterface> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.log(err);
                throw new Error("Can't get initial location");
            }
        )
    },

    async searchPlaces({ commit, state }, query: string): Promise<Feature[]> {

        if (query.length === 0) {
            commit('setPlaces', [])
            return []
        }

        if (!state.userLocation) {
            throw new Error("No user location specified");

        }

        commit('setIsLoadingPlaces')

        const response = await searchApi.get<PlaceResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        })

        commit('setPlaces', response.data.features)

        return response.data.features

    }
}



export default actions;