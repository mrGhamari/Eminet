<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <!-- Header -->
    <q-header class="header" flat>
      <q-toolbar class="row justify-between items-center fit">
        <div class="row items-center">
          <div class="text-h5 text-bold text-black">Logo</div>
          <q-btn flat no-caps color="black" :label="$t('find_immigrant')" />
          <q-btn flat no-caps color="black" :label="$t('become_immigrant')" />
        </div>

        <div class="row items-center">
          <q-btn-dropdown class="q-ml-lg q-mr-md text-black" :label="selectedLanguage" dense flat>
            <q-list>
              <q-item
                clickable
                v-close-popup
                v-for="(item, index) in languageOptions"
                :key="index"
                @click="selectLang(item)"
              >
                <q-item-section>
                  <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn flat color="black" icon="help" />
          <q-btn :label="$t('login')" no-caps outline color="black" icon="login" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main -->
    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->

    <!-- Footer -->
    <q-footer class="bg-black" flat>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLocale } from 'src/composables/use-locale';

// ------ lifeCycle ------
onMounted(() => (selectedLanguage.value = localStorage.getItem('language') === 'enUS' ? 'EN' : 'فارسی'));

// ------ Variables ------
const locale = useLocale();
const selectedLanguage = ref<string>();
const languageOptions: { value: 'faIR' | 'enUS'; label: string }[] = [
  { label: 'EN', value: 'enUS' },
  { label: 'فارسی', value: 'faIR' },
];

// ------ Methods ------
const selectLang = (lang: { label: string; value: 'faIR' | 'enUS' }) => {
  selectedLanguage.value = lang.label;
  locale.setLocale(lang.value);
};
</script>
<style lang="scss" scoped>
.main-layout {
  .header {
    height: 70px;
  }
}
</style>
