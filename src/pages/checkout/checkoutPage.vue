<template>
  <q-page class="checkout-page row fit">
    <div class="offset-3 column justify-center">
      <div class="text-h6 text-italic text-bold column q-mb-md">
        <span> سلام; ممنون که به ما اعتماد کردی و اجازه دادی در مسیر مهاجرت بهت کمک کنیم. :) </span>
        <span>
          فرمی این زیر برات قرار دادیم برای اینه که بتونیم باهات در تماس باشیم و شما رو به یک فردی که مهاجرت کرده وصل
          کنیم
        </span>
        <span>- موفق باشی دوست من</span>
      </div>

      <q-form ref="contactFormRef" class="form-wrapper row q-col-gutter-x-sm rounded-borders q-pa-lg">
        <base-input
          class="col-6"
          v-model="contactForm.firstName"
          type="text"
          :rules="[rules.required]"
          :label="$t('first_name')"
        />
        <base-input
          v-model="contactForm.lastName"
          class="col-6"
          type="text"
          :rules="[rules.required]"
          :label="$t('last_name')"
        />
        <base-input
          v-model="contactForm.email"
          type="email"
          class="col-6"
          :rules="[rules.required, rules.email]"
          :label="$t('email')"
        />
        <base-input
          class="col-6"
          v-model="contactForm.phoneNumber"
          :rules="[rules.required, rules.onlyNumber]"
          :label="$t('phone_number')"
          :maxLength="11"
        />
        <base-select
          v-model="contactForm.gender"
          class="col-12"
          :label="$t('gender')"
          :options="[
            { label: $t('male'), value: 'MALE' },
            { label: $t('female'), value: 'FEMALE' },
          ]"
          optionLabel="label"
          optionValue="value"
          optionsValue
          mapOption
          emitValue
        />
        <div class="col-12 q-mt-md">
          <q-btn
            :label="completedFormFlag ? $t('back') : $t('submit')"
            class="fit"
            color="primary"
            @click="completedFormFlag ? goBackPervPage() : submitForm()"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'CheckoutPage' });
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRules } from 'src/composables/useRules';
import useMvpService from 'src/services/mvpService';
import { useNotify } from 'src/composables/use-notify';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

// ------ Interface ------
interface IContactForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
}

// ------ Variables ------
// Compose
const { t } = useI18n();
const rules = useRules();
const route = useRoute();
const notify = useNotify();
const router = useRouter();
const mvpService = useMvpService();

// Data
const contactFormRef = ref();
const completedFormFlag = ref<boolean>(false);
const contactForm: IContactForm = reactive({});

// ------ Methods ------
const submitForm = () => {
  contactFormRef.value.validate().then(async (success: boolean) => {
    if (success) {
      try {
        const body = { ...contactForm };
        const response = await mvpService.submitForm(route.params.token as string, body);
        if (response.status >= 200 && response.status <= 209) {
          notify.success(response.message);
          completedFormFlag.value = true;
        }
      } catch (e: any) {
        notify.error(e.response.data.message);
      }
    } else notify.error(t('complete_form'));
  });
};
const goBackPervPage = () => router.go(-1);
</script>

<style lang="scss" scoped>
.checkout-page {
  .form-wrapper {
    border: 2px solid black;
  }
}
</style>
