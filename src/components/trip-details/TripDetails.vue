<template>
    <div v-if="distance" class="trip-container column">
        <div class="col">Distance: <strong>{{ distance }} km</strong></div>
        <div class="col">Duration: <strong>{{ duration }} minutes</strong></div>
    </div>
</template>
<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TripDetails",
    setup() {

        const { distance, duration } = useMapStore()
        return {
            distance, duration
        }
    },
})
</script>
<style scoped>
.trip-container {
    padding: 1rem;
    position: fixed;
    bottom: 3rem;
    left: 3rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 1rem 1rem rgb(0, 0, 0, 0.2);
    font-size: 1rem;
    width: 15rem;
}
</style>