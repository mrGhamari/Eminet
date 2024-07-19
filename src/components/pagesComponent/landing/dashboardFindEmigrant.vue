<template>
  <div class="dashboard-find-emigrant">
    <h2 class="text-bold text-center">{{ $t('right_emigrant') }}</h2>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'DashboardFindEmigrant' });
import { ref } from 'vue';

// ------ Variables ------
const slide = ref<number>(1);
const autoplay = ref<boolean>(true);
</script>

<style scoped></style>
