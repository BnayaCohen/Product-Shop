<template>
  <ul v-if="items.length"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <li v-for="item in items" :key="item.id">
      <item-preview :item="item" :isCart="isCart" :addOrRemoveItem="addOrRemoveItem" />
    </li>
  </ul>
  <h2 v-else class="text-1xl font-small text-gray-400 text-center my-8">אין מוצרים להצגה</h2>
</template>

<script setup>
import itemPreview from "./item-preview.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  isCart: {
    type: Boolean,
    required: false,
  },
  addOrRemoveItem: {
      type: Function,
      required: true
    }
});
</script>