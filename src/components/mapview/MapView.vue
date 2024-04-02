<script lang="ts" src="./MapView.ts" />
<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex flex-column justify-content-center align-items-center">
        <div class="text-center"></div>
        <h3>Wait please</h3>
        <span>Locating...</span>
    </div>
    <div v-show="isUserLocationReady" class="map-container" ref="mapElement"></div>
</template>
<style scoped>
.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* background-color: #41b883; */
}

.loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: #41b883;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;
}
</style>