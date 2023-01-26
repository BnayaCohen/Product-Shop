<template>
  <ul
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <li v-for="item in items" :key="item.id">
      <item-preview :item="item" />
    </li>
  </ul>
</template>

<script setup>
import itemPreview from "./item-preview.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
