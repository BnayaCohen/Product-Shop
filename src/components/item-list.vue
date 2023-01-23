<template>
    <ul class="items-list">
        <h1>{{ items.length }}</h1>
        <li v-for="item in items" :key="item.id">
            <item-preview :item="item" />
        </li>
    </ul>
</template>

<script>
import itemPreview from './item-preview.vue'

export default {
    name: 'items-list',
    props: {
        items: Array,
    },
    components: {
        itemPreview
    },
}
</script>

<style>
.items-list {
    display: flex;
    flex-wrap: wrap;
}
</style>