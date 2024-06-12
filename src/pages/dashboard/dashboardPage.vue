<template>
  <q-page class="dashboard-page">
    <header-dashboard />
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'">
        <dashboard-summary />
        <dashboard-countries />
        <dashboard-find-emigrant />
        <dashboard-how-work />
      </div>
    </div>
    <div class="bg-primary column items-center justify-center q-py-xxl">
      <h1 class="text-bold q-ma-none">{{ $t('guarantee_text') }}</h1>
      <div class="text-h6">{{ $t('guarantee_description') }}</div>
    </div>
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'DashboardPage' });
import { useQuasar } from 'quasar';
import HeaderDashboard from 'src/components/pagesComponent/dashboard/headerDashboard.vue';
import DashboardSummary from 'src/components/pagesComponent/dashboard/dashboardSummary.vue';
import DashboardHowWork from 'src/components/pagesComponent/dashboard/dashboardHowWork.vue';
import DashboardCountries from 'src/components/pagesComponent/dashboard/dashboardCountries.vue';
import dashboardFindEmigrant from 'src/components/pagesComponent/dashboard/dashboardFindEmigrant.vue';

// ------ Variables ------
const $q = useQuasar();
</script>
