<template>
  <q-layout view="hHh lpR fff" class="main-layout">
    <q-header class="header bg-white" bordered>
      <q-toolbar v-if="$q.screen.gt.md" class="row justify-between items-center fit">
        <div class="text-h5 text-bold text-black">Logo</div>
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
          <q-btn icon="notifications" flat dense color="black" />
          <q-avatar rounded size="lg" color="teal" text-color="white" icon="person" />
        </div>
      </q-toolbar>

      <q-toolbar v-else class="row justify-between items-center fit">
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <div class="text-h5 text-bold text-black">Logo</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-black footer" flat>
      <q-toolbar>
        <q-toolbar-title>
          <footer-item />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({ name: 'MainLayout' });
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useLocale } from 'src/composables/use-locale';
import footerItem from 'src/components/layout/shared/footerItem.vue';

// ------ lifeCycle ------
onMounted(() => (selectedLanguage.value = localStorage.getItem('language') === 'enUS' ? 'EN' : 'فارسی'));

// ------ Variables ------
const $q = useQuasar();
const locale = useLocale();
const drawerLeft = ref<boolean>(false);
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
    height: 70px !important;
  }
}
</style>
