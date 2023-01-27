<template>
  <section class="container text-center">
    <h1 class="text-3xl font-small text-white my-3">העגלה שלך</h1>
    <h1 class="text-1xl font-small text-white my-3">תאריך: {{ date }}</h1>
    <span class="text-1xl font-small text-white mx-4">סה"כ: {{ totalCartPrice }} שח</span>
    <items-list :items="items" :isCart="true" :addOrRemoveItem="addOrRemoveItem" />
  </section>
</template>

<script setup>
import { computed } from "vue";
import itemsList from "../components/item-list.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  addOrRemoveItem: {
    type: Function,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default:new Date()
  }
});

const totalCartPrice = computed(() => {
  return props.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
});

</script>
