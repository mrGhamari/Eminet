<template>
  <div class="dashboard-how-work">
    <h3 class="text-bold">{{ $t('how_work') }}</h3>
    <div class="row items-center q-col-gutter-x-md">
      <div class="col">
        <q-card class="q-pa-md" bordered flat>
          <q-chip color="orange" text-color="white"> 1 </q-chip>
          <div class="text-h4 text-bold">{{ $t('find_emigrant') }}</div>
          <div class="text-body">{{ $t('find_emigrant_description') }}</div>
        </q-card>
      </div>

      <div class="col">
        <q-card class="q-pa-md" bordered flat>
          <q-chip square color="orange" text-color="white"> 2 </q-chip>
          <div class="text-h4 text-bold">{{ $t('connect_emigrant') }}</div>
        </q-card>
      </div>

      <div class="col">
        <q-card class="q-pa-md" bordered flat>
          <q-chip square color="orange" text-color="white"> 3 </q-chip>
          <div class="text-h4 text-bold">{{ $t('counseling') }}</div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HowWork' });
</script>

<style scoped></style>
