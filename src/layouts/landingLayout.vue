<template>
  <q-layout view="hhh lpR fff" class="main-layout">
    <!-- Header -->
    <q-header class="header bg-white" flat>
      <q-toolbar v-if="$q.screen.gt.md" class="row justify-between items-center fit">
        <div class="row items-center">
          <img src="../assets/images/Header logo.svg" width="100px" height="100%" />
          <q-btn class="q-mx-md" flat no-caps dense color="black" :label="$t('find_immigrant')" />
          <q-btn flat no-caps dense color="black" :label="$t('become_immigrant')" />
        </div>

        <div class="row items-center">
          <q-btn-dropdown class="text-black" :label="selectedLanguage" dense flat>
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
          <q-btn class="q-mr-sm" flat dense color="black" icon="help" />
          <q-btn :label="$t('sign_up')" no-caps outline color="black" />
          <q-btn :label="$t('login')" class="q-ml-md" no-caps outline color="black" />
        </div>
      </q-toolbar>

      <q-toolbar v-else class="row justify-between items-center fit">
        <q-btn-dropdown class="text-black" :label="selectedLanguage" dense flat>
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
        <img src="../assets/images/Header logo.svg" width="100px" height="100%" />
      </q-toolbar>
    </q-header>

    <!-- Main -->
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
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import { useLocale } from 'src/composables/use-locale';
import footerItem from 'src/components/layout/shared/footerItem.vue';

// ------ lifeCycle ------
onMounted(() => (selectedLanguage.value = localStorage.getItem('language') === 'enUS' ? 'EN' : 'فارسی'));

// ------ Variables ------
const $q = useQuasar();
// const router = useRouter();
const locale = useLocale();
// const drawerLeft = ref<boolean>(false);
const selectedLanguage = ref<string>();
const languageOptions: { value: 'faIR' | 'enUS'; label: string }[] = [
  { label: 'EN', value: 'enUS' },
  { label: 'فارسی', value: 'faIR' },
];

// ------ Methods ------
// const goToPage = () => router.push({ name: 'Login' });
const selectLang = (lang: { label: string; value: 'faIR' | 'enUS' }) => {
  selectedLanguage.value = lang.label;
  locale.setLocale(lang.value);
};
</script>
<style lang="scss" scoped>
.main-layout {
  .header {
    height: 50px;
  }
}
</style>
