<template>
  <section class="container">
    <items-filter @setFilter="filterItems" />
    <items-list :items="items" :addOrRemoveItem="addOrRemoveItem" />
  </section>
</template>

<script setup>
import itemsFilter from "../components/item-filter.vue";
import itemsList from "../components/item-list.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  filterItems: {
    type: Function,
    required: true
  },
  addOrRemoveItem: {
    type: Function,
    required: true
  }
});

</script>
