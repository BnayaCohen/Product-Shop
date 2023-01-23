<template>
  <section class="mb-6 flex justify-center items-center">
    <datePicker class="bg-gray-800 text-white" 
      v-model="filterBy.date" 
      :min-date="new Date()"
      :max-date="twoWeeksFromNow" 
      @update:modelValue="filter" />
  </section>
</template>

<script>
import datePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'item-filter',
  data() {
    return {
      filterBy: {
        date: null,
      },
    }
  },
  methods: {
    filter(date) {
      this.filterBy.date = date
      this.$emit('setFilter', this.filterBy)
    }
  },
  computed: {
    twoWeeksFromNow() {
      var date = new Date();
      date.setDate(date.getDate() + 14);
      return date;
    },
  },
  components: {
    datePicker
  },
}
</script>