import { boot } from 'quasar/wrappers';
import BaseSelect from 'components/shared/BaseSelect.vue';
import BaseInput from 'src/components/shared/BaseInput.vue';

export default boot(({ app }) => {
  const Vue = app;
  Vue.component('BaseInput', BaseInput);
  Vue.component('BaseSelect', BaseSelect);
});
