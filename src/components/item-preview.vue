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
    <div class="px-6 py-4 text-center">
      <span
        class="bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300"
      >
        מחיר: {{ item.price }} ש״ח
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
