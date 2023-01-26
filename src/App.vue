<template>
  <app-header :isCart="toggleCart" @onToggleCart="() => toggleCart = !toggleCart" />
  <div v-if="!toggleCart" class="container">
    <items-filter @setFilter="filterItems" />
    <items-list v-if="itemsToShow" :items="itemsToShow" :addOrRemoveItem="addOrRemoveItem" />
  </div>
  <div v-else class="container text-center">
    <h1 class="text-3xl font-small text-white my-3">העגלה שלך</h1>
    <span class="text-1xl font-small text-white mx-4">סה"כ: {{ totalCartPrice }} שח</span>
    <items-list :items="cartItems" :toggleCart="true" :addOrRemoveItem="addOrRemoveItem" />
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import appHeader from "./components/app-header.vue";
import itemsFilter from "./components/item-filter.vue";
import itemsList from "./components/item-list.vue";
import { itemService } from "./services/itemService";

const toggleCart = ref(false);
const itemsToShow = ref([]);
const cartItems = ref([]);

onBeforeMount(() => {
  itemsToShow.value = itemService.getItems();
});

const totalCartPrice = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
});

function filterItems(filterBy) {
  itemsToShow.value = itemService.getItems(filterBy);
};

function addOrRemoveItem(item, diff) {
  const itemIndex = cartItems.value.findIndex(i => i.id === item.id)

  if (itemIndex !== -1) {
    cartItems.value[itemIndex].quantity += diff;

    if (cartItems.value[itemIndex].quantity === 0)
      cartItems.value.splice(itemIndex, 1);
  }
  else cartItems.value.push({
    id: item.id,
    price: item.price,
    description: item.description,
    name: item.name,
    quantity: 1
  });

}
</script>
