<template>
    <ul class="items-list px-8">
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
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
    gap: 1rem;
}

/* Media Queries */
@media (max-width: 1200px) {
    .items-list {
        grid-template-columns: repeat(3, minmax(220px, 1fr));
    }
}

@media (max-width: 992px) {
    .items-list {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
    }
}

@media (max-width: 576px) {
    .items-list {
        grid-template-columns: repeat(1, minmax(220px, 1fr));
    }
}
</style>