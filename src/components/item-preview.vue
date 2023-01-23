<template>
<div class="w-220 h-full bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col text-white">
  <img class="w-full h-64 object-cover" :src="`https://robohash.org/${item.id}?set=set4`">
  <div class="px-6 py-4 flex-1">
    <div class="font-bold text-xl mb-2">{{ item.name }}</div>
    <p class="text-gray-500 text-base">
      {{ item.description || 'אין תיאור' }}
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">מחיר: {{ item.price }} שח</span>
  </div>
</div>
</template>

<script>
export default {
	name: 'item-preview',
	props: {
		item: Object,
	},
}
</script>