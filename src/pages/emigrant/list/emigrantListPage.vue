<template>
  <q-page class="emigrant-list-page fix">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="row q-col-gutter-md q-pa-md">
          <div class="col-8">
            <div class="column q-col-gutter-y-md">
              <Emigrant-card v-for="(item, index) in 8" :key="index" />
            </div>
          </div>
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
              <q-card-section> Lorem ipsum dolor sit amet, consectetur adipiscing elit </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantListPage' });
import EmigrantCard from 'src/components/pagesComponent/emigrant/list/emigrantCard.vue';
</script>

<style scoped></style>
