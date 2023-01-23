<template>
    <app-header />
    <app-hero />
    <items-filter @setFilter="setFilter" />
    <items-list v-if="itemsToShow" :items="itemsToShow" />
    <app-footer />
</template>

<script>
import appHeader from './components/app-header.vue'
import appHero from './components/app-hero.vue'
import itemsFilter from './components/item-filter.vue'
import itemsList from './components/item-list.vue'
import appFooter from './components/app-footer.vue'
import { itemService } from './services/itemService'

export default {
  name: 'app',
  components: {
    appHeader,
    appHero,
    itemsFilter,
    itemsList,
    appFooter
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
    setFilter(filterBy) {
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
