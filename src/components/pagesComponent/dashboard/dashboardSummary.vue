<template>
  <div class="row items-center justify-between q-py-xl">
    <div
      :class="$q.screen.gt.sm ? 'col' : 'col-6 q-mt-md'"
      class="column text-center"
      v-for="(item, index) in summary"
      :key="index"
    >
      <span class="text-bold text-h4">{{ item.value }}</span>
      <span class="text-h6 text-grey">{{ $t(item.title) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'DashboardSummary' });
import { useQuasar } from 'quasar';
import { ref } from 'vue';

// ------ Variables ------
const $q = useQuasar();
const summary = ref<{ title: string; value: number }[]>([
  { title: 'number_of_countries', value: +23 },
  { title: 'number_of_immigrants', value: +860 },
  { title: 'migration_way', value: +10 },
  { title: 'number_of_consultations', value: +10000 },
]);
</script>

<style scoped></style>
