import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/api';
import { DirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number, number]

const actions: ActionTree<MapState, StateInterface> = {
    async getRoutePoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {
        const response = await directionsApi.get<DirectionsResponse>(`${start.join(',').replace(',', '%2C')}%3B${end.join(',').replace(',', '%2C')}`)

        commit('setDistanceDuration', {
            distance: response.data.routes[0].distance,
            duration: response.data.routes[0].duration
        })

        commit('setRoutePolyline', response.data.routes[0].geometry.coordinates)
        return response.data

    }
}



export default actions;