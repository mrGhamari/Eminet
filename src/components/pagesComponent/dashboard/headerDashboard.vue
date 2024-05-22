<template>
  <div class="header-dashboard bg-primary row justify-evenly items-center q-pb-xl">
    <div :class="$q.screen.gt.sm ? 'col-3' : 'col-12 q-px-md'" class="column text-section">
      <div class="text-h2 col">{{ $t('dashboard_counseling') }}</div>
      <div class="full-width">
        <q-btn
          :label="$t('get_start')"
          color="black"
          class="q-mt-lg full-width"
          :icon-right="!$q.lang.rtl ? 'arrow_forward' : 'arrow_back'"
        />
      </div>
    </div>
    <div :class="$q.screen.gt.sm ? 'col-3' : 'col-12 q-pa-md'">
      <q-img :src="PouyaPicture" :ratio="16 / 9" width="25rem" height="25rem" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HeaderDashboard' });
import { useQuasar } from 'quasar';
import PouyaPicture from 'src/assets/images/pouya.jpg';

// ------ Variables ------
const $q = useQuasar();
</script>
