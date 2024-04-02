<script lang="ts" src="./SearchResults" />
<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Please wait</h5>
        <p>Loading...</p>
    </div>

    <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li v-for="place in places" :key="place.id" class="list-group-item list-group-action"
            @click="onPlaceClick(place)" :class="{ 'active': place.id === activePlace }">
            <h3>{{ place.text }}</h3>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button class="button-list btn btn-outline-primary btm-sm"
                    :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)">Directions</button>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li {
    cursor: pointer;
}

li:hover {
    background-color: #35495e;
    color: white;
    border-color: #41b883;
}

.active {
    background: #41b883;
    border-color: #1f6a48;
}

li:active {
    background: #35495e;
    border-color: #1f6a48;
}

button {
    background: #35495e;
    color: #41b883;
    border-color: #41b883;
}

button:hover {
    background: #41b883;
    color: #35495e;
    border-color: #35495e;
}

.button-list:active {
    background: #35495e;
    color: #41b883;
    border-color: #41b883;
}

h3 {
    font-size: 1rem;
    font-weight: 530;
}

p {
    font-size: 0.6rem;
}
</style>