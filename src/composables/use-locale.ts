import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

import faIR from 'quasar/lang/fa-IR';
import enUS from 'quasar/lang/en-US';

type SupportedLanguage = 'faIR' | 'enUS';

const langPacks = { faIR, enUS };

export function useLocale() {
  const $q = useQuasar();
  const locale = ref<string>('faIR');
  const i18n = useI18n({ useScope: 'global' });

  function setLocale(langIsoName: SupportedLanguage) {
    locale.value = langIsoName;
    i18n.locale.value = langIsoName;
    $q.lang.set(langPacks[langIsoName] ?? langPacks.enUS);
    localStorage.setItem('language', langIsoName);
  }

  function loadLastState() {
    const prevState =
      (localStorage.getItem('language') as SupportedLanguage) !== null
        ? (localStorage.getItem('language') as SupportedLanguage)
        : 'enUS';
    setLocale(prevState);
  }

  return {
    locale,
    setLocale,
    loadLastState,
  };
}
