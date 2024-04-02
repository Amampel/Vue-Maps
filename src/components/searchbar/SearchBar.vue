<script lang="ts" src="./SearchBar" />
<template>
    <div class="searchbar-container">
        <input class="form-control" type="text" placeholder="Search place..." v-model="searchTerm" />
        <SearchResults />
    </div>
</template>


<style scoped>
.searchbar-container {
    position: fixed;
    top: 3rem;
    left: 3rem;
    background: white;
    z-index: 999;
    box-shadow: 1rem 1rem 1rem rgb(0, 0, 0, 0.2);
    width: 15rem;
    border-radius: 1rem !important;
    overflow: hidden;
    padding: 0.5rem;
}

.form-control {
    background: white;
    color: #41b883;
}
</style>