<template>
  <div class="dashboard-countires row q-col-gutter-md">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" v-for="(item, index) in 10" :key="index">
      <country-component />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'DashboardCountries' });
import countryComponent from 'src/components/pagesComponent/dashboard/component/countryComponent.vue';
</script>
