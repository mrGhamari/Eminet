<template>
  <div class="dashboard-how-work">
    <h3 class="text-bold">{{ $t('how_work') }}</h3>
    <div class="row items-stretch q-col-gutter-x-md">
      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip color="orange" text-color="white"> 1 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('find_emigrant') }}</div>
          <div class="text-body">{{ $t('find_emigrant_description') }}</div>
          <div class="q-mt-md">
            <q-img src="../../../assets/images/connectImage.avif" width="21rem" height="22rem" />
          </div>
        </q-card>
      </div>

      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip square color="orange" text-color="white"> 2 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('connect_emigrant') }}</div>
          <div class="text-body">{{ $t('connect_emigrant_description') }}</div>
          <div class="q-mt-md">
            <q-img src="../../../assets/images/connectImage.avif" width="21rem" height="22rem" />
          </div>
        </q-card>
      </div>

      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <q-chip square color="orange" text-color="white"> 3 </q-chip>
          <div class="text-h4 text-bold q-py-sm">{{ $t('counseling') }}</div>
          <div class="text-body">{{ $t('conuseling_description') }}</div>
          <div class="q-mt-md">
            <q-img src="../../../assets/images/connectImage.avif" width="21rem" height="22rem" />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HowWork' });
</script>

<style scoped></style>
