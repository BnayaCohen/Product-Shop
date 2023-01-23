<template>
  <section class="item-filter">
    <datePicker v-model="filterBy.date" 
    :min-date="new Date()" 
    :max-date="twoWeeksFromNow"
    @update:modelValue="filter" />
    <!-- <el-button-group class="ml-4">
      <el-button type="primary" @click="setSort('name')">Name</el-button>
      <el-button type="primary" @click="setSort('date')">Date</el-button>
      <el-button type="primary" @click="setSort('price')">Price</el-button>
    </el-button-group> -->
  </section>
</template>

<script>
import datePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'item-filter',
  components: {
    datePicker
  },
  data() {
    return {
      filterBy: {
        date: null,
        // sortBy: null,
      },
    }
  },
  methods: {
    filter(date) {
      this.filterBy.date = date
      this.$emit('setFilter', this.filterBy)
    },
    // setSort(sortBy) {
    //   this.filterBy.sortBy = sortBy
    //   this.$emit('setFilter', this.filterBy)
    // }
  },
  computed: {
    twoWeeksFromNow() {
      var date = new Date();
      date.setDate(date.getDate() + 14);
      return date;
    },
  },
}
</script>