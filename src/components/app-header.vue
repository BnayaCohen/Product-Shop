<template>
  <header class="bg-gray-600 text-white py-6 px-3">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-2xl font-medium">חתולים מאכלים</h1>
      <nav>
        <a href="#" class="link" @click="$emit('onToggleCart')">{{ isCart ? ' כל המוצרים ' : ' עגלה ' }}</a>
        <a href="#" class="link"> צור קשר </a>
        <a href="#" class="link"> עלינו </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isCart: {
    type: Boolean,
    required: true,
  }
});
</script>

<style scoped>
.link {
  @apply px-4 py-2 text-white hover:bg-gray-500 rounded-md;
}
</style>
