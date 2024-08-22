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
    <div class="bg-primary column flex flex-center q-py-xxl">
      <div class="text-h2 text-bold q-ma-none">{{ $t('guarantee_text') }}</div>
      <div class="text-h6">{{ $t('guarantee_description') }}</div>
    </div>
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'">
        <become-emigrant />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'DashboardPage' });
import { useQuasar } from 'quasar';
import HeaderDashboard from 'src/components/pagesComponent/landing/headerDashboard.vue';
import DashboardSummary from 'src/components/pagesComponent/landing/dashboardSummary.vue';
import DashboardHowWork from 'src/components/pagesComponent/landing/dashboardHowWork.vue';
import DashboardCountries from 'src/components/pagesComponent/landing/dashboardCountries.vue';
import dashboardFindEmigrant from 'src/components/pagesComponent/landing/dashboardFindEmigrant.vue';
import BecomeEmigrant from 'src/components/pagesComponent/landing/becomeEmigrant.vue';

// ------ Variables ------
const $q = useQuasar();
</script>
