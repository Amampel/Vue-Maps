<template>
    <button v-if="isButtonReady" class="button-location btn btn-primary" @click="onMyLocationClicked">Go to my
        location</button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from "@/composables";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: "MyLocationButton",
    setup() {

        const { userLocation, isUserLocationReady } = usePlaceStore();
        const { map, isMapReady } = useMapStore();
        return {
            isButtonReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),
            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 10
                })
            }
        }
    },
})
</script>

<style scoped>
button {
    position: fixed;
    top: 3rem;
    right: 3rem;
    background: #41b883;
    border-color: #41b883;
}

button:hover {
    background: #236447;
    border-color: #236447;
}

.button-location:active {
    background: #64af8d;
    border-color: #64af8d;
}
</style>