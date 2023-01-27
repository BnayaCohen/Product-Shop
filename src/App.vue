<template>
  <app-header :isCart="toggleCart" @onToggleCart="() => toggleCart = !toggleCart" />

  <items-app v-if="!toggleCart" :filterItems="filterItems" :items="itemsToShow" :addOrRemoveItem="addOrRemoveItem" />
  <items-cart v-else :items="cartItems" :addOrRemoveItem="addOrRemoveItem" :date="date" />
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import appHeader from "./components/app-header.vue";
import itemsApp from "./pages/item-app.vue";
import itemsCart from "./pages/item-cart.vue";
import { itemService } from "./services/itemService";

const toggleCart = ref(false);
const itemsToShow = ref([]);
const cartItems = ref([]);
const date = ref(null);

onBeforeMount(() => {
  itemsToShow.value = itemService.getItems();
});

function filterItems(filterBy) {
  date.value = filterBy.date
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
};
</script>
