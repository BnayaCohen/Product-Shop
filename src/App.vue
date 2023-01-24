<template>
  <app-header />
  <div class="container">
    <items-filter @setFilter="filterItems" />
    <items-list v-if="itemsToShow" :items="itemsToShow" />
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import appHeader from "./components/app-header.vue";
import itemsFilter from "./components/item-filter.vue";
import itemsList from "./components/item-list.vue";
import { itemService } from "./services/itemService";

const itemsToShow = ref([]);

onBeforeMount(() => {
  itemsToShow.value = itemService.getItems();
});

function filterItems(filterBy) {
  itemsToShow.value = itemService.getItems(filterBy);
}
</script>
