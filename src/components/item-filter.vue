<template>
  <section class="py-5 flex justify-center items-center">
    <datePicker
      v-model="filterBy.date"
      :min-date="new Date()"
      :max-date="twoWeeksFromNow"
      hide-offset-dates
      auto-apply
      format="dd/MM/yyyy"
      input-class-name="datepicker"
      locale="he"
      :day-names="dayNames"
      :enable-time-picker="false"
      week-start="0"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";

import datePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emit = defineEmits(["setFilter"]);

const filterBy = ref({
  date: null,
});

const dayNames = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

watch(
  filterBy,
  (newVal) => {
    emit("setFilter", newVal);
  },
  {
    deep: true,
  }
);

const twoWeeksFromNow = computed(() => {
  var date = new Date();
  date.setDate(date.getDate() + 14);
  return date;
});
</script>

<style>
.dp__calendar_wrap {
  @apply !font-sans;
}

.dp__inner_nav svg {
  transform: scale(-1);
}
</style>
