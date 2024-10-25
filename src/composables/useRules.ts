import { useI18n } from 'vue-i18n';

export function useRules() {
  const { t } = useI18n();
  const required = (val: string) => (val && val.length > 0) || t('required_error');
  const email = (val: string) => {
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
    return isValidEmail || t('email_error');
  };
  const onlyNumber = (value: string) => {
    const isValidNumber = /^\d+$/.test(value);
    return isValidNumber || t('phone_number_error');
  };
  return { required, email, onlyNumber };
}
