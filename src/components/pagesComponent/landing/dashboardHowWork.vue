<template>
  <div class="dashboard-how-work">
    <h3 class="text-bold">{{ $t('how_work') }}</h3>
    <div class="row justify-between q-col-gutter-x-md">
      <div :class="$q.screen.gt.sm ? 'col' : 'col-12 q-mt-md'">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip color="orange" text-color="white"> 1 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('find_emigrant') }}</div>
          <div class="text-body">{{ $t('find_emigrant_description') }}</div>
          <div class="q-mt-md">
            <q-img src="src/assets/images/connectImage.avif" width="100%" height="100%" />
          </div>
        </q-card>
      </div>

      <div :class="$q.screen.gt.sm ? 'col' : 'col-12 q-mt-md'">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip square color="orange" text-color="white"> 2 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('connect_emigrant') }}</div>
          <div class="text-body">{{ $t('connect_emigrant_description') }}</div>
          <div class="q-mt-md">
            <q-img src="src/assets/images/connectImage.avif" width="100%" height="100%" />
          </div>
        </q-card>
      </div>

      <div :class="$q.screen.gt.sm ? 'col' : 'col-12 q-mt-md'">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip square color="orange" text-color="white"> 3 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('counseling') }}</div>
          <div class="text-body">{{ $t('conuseling_description') }}</div>
          <div class="q-mt-md">
            <q-img src="src/assets/images/connectImage.avif" width="100%" height="100%" />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HowWork' });
import { useQuasar } from 'quasar';

// ------ Variables ------
const $q = useQuasar();
</script>

<style scoped></style>
