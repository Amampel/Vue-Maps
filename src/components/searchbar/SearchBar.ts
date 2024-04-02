import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { useMapStore, usePlaceStore } from "@/composables";

export default defineComponent({
    name: "SearchBar",
    components: { SearchResults },
    setup() {

        const debouncedValue = ref('')
        const debounceTimeout = ref()

        const { searchPlaces } = usePlaceStore()
        const { map } = useMapStore()
        return {
            debouncedValue,
            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set(value: string) {
                    if (debounceTimeout.value) clearTimeout(debounceTimeout.value)
                    debounceTimeout.value = setTimeout(() => {
                        debouncedValue.value = value;
                        searchPlaces(value)
                        map.value?.flyTo({
                            zoom: 10
                        })
                    }, 500);
                }
            })
        }
    },
})