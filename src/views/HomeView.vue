<template>
  <div class="home">
    <MapView />
    <MyLocationButton />
    <SearchBar />
    <TripDetails />
  </div>
</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';
import { usePlaceStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar, TripDetails },
  setup() {
    usePlaceStore()
  }
});
</script>
