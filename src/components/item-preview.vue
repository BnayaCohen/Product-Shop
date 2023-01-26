<template>
  <article
    class="h-full bg-gray-800 rounded-lg shadow-md flex flex-col justify-center text-white"
  >
    <img
      class="w-full h-64 object-contain"
      :src="`https://robohash.org/${item.id}?set=set4`"
    />
    <div class="px-6 py-4 flex-1 text-center">
      <div class="font-bold text-xl mb-2">{{ item.name }}</div>
      <p class="text-gray-500">
        {{ item.description || "אין תיאור" }}
      </p>
    </div>
    <div class="px-6 py-4 text-center flex flex-col gap-3">
  <span class="bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
    מחיר: {{ item.price }} ש״ח
  </span>
  <button v-if="!isCart" @click="addOrRemoveItem(item ,1)" class="bg-green-500 rounded-lg px-4 py-2 text-white hover:bg-green-600">
    הוסף לעגלה
  </button>
  <div v-else>
    <button @click="addOrRemoveItem(item, -1)" class="bg-red-500 rounded-lg px-4 py-2 text-white hover:bg-red-600">
      הורד כמות
    </button>
    <span class=" rounded-lg px-4 py-1 mx-1 text-md text-gray-300">
    כמות בעגלה: <span class="text-green-600">{{ item.quantity }}</span>
  </span>
  </div>
</div>
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isCart: {
    type: Boolean,
    required: false,
  },
  addOrRemoveItem: {
      type: Function,
      required: true}
});

const emit = defineEmits(["addOrRemoveItem"]);

</script>
