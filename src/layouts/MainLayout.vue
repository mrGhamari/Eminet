<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">

    <!-- Header -->
    <q-header class="header" flat>
      <q-toolbar class="row justify-between items-center fit">
        <div class="row items-center">
          <div class="text-h5 text-bold text-black">{{ title }}</div>
          <q-btn
            flat
            size="lg"
            color="black"
            label="میزبان"
          />
          <q-btn
            flat
            size="lg"
            color="black"
            label="تمرینات"
          />
          <q-btn
            flat
            size="lg"
            color="black"
            label="میزبان شوید"
          />
        </div>

        <div class="row items-center">
          <q-btn-dropdown flat label="فارسی / دلار" text-color="black">
            <q-card flat class="q-pa-sm">
              <q-select
                v-model="selectedLanguage"
                :options="languageOptions"
                label="زبان"
                outlined
              />
              <q-separator class="q-my-md" inset />

              <q-select
                v-model="selectedCurrency"
                :options="currencyOptions"
                label="ارز"
                outlined
              />
            </q-card>
          </q-btn-dropdown>
          <q-btn flat color="black" icon="help" />
          <q-btn label="ورود" outline color="black" icon="login" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-black"  flat>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref<string>('Eminet');
const selectedLanguage = ref<string>('فارسی');
const selectedCurrency = ref<string>('دلار');
const languageOptions = ref<{ [key: string]: string }[]>([]);
const currencyOptions = ref<{ [key: string]: string }[]>([]);


</script>
<style lang="scss" scoped>
.main-layout {
  .header {
    height: 70px;
  }
}
</style>
