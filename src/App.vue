<template>
    <app-header />
    <items-filter @setFilter="filterItems" />
    <items-list v-if="itemsToShow" :items="itemsToShow" />
</template>

<script>
import appHeader from './components/app-header.vue'
import itemsFilter from './components/item-filter.vue'
import itemsList from './components/item-list.vue'
import { itemService } from './services/itemService'

export default {
  name: 'app',
  components: {
    appHeader,
    itemsFilter,
    itemsList,
  },
  data() {
    return {
      itemsToShow: [],
    }
  },
  created() {
    this.itemsToShow = itemService.getItems()
  },
  methods: {
    filterItems(filterBy) {
      this.itemsToShow = itemService.getItems(filterBy)
    },
  }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
