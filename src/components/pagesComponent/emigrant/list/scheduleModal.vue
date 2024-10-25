<template>
  <q-dialog v-model="showModalModel" :backdrop-filter="'brightness(20%)'" persistent>
    <q-card>
      <div class="row justify-between q-pa-md">
        <span class="text-bold text-h5">{{ immigo.user.firstName + ' ' + immigo.user.lastName }}</span>
        <q-btn icon="close" flat v-close-popup dense />
      </div>

      <q-separator inset />

      <q-stepper v-model="step" ref="stepperRef" color="primary" animated>
        <q-step :name="1" :title="$t('select_schedule')" icon="schedule" :done="step > 1">
          <q-option-group v-model="selectedSchedule" inline color="secondary" :options="schedule" />
        </q-step>

        <q-step :name="2" :title="$t('contact_form')" icon="post_add" :done="step > 2">
          <q-form ref="contactFormRef" class="row q-col-gutter-md">
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
            <base-select
              v-model="contactForm.gender"
              class="col-6"
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
          </q-form>
        </q-step>

        <template #navigation>
          <q-stepper-navigation class="row justify-end">
            <q-btn v-if="step > 1" flat color="error" @click="prevStep" :label="$t('back')" class="q-ml-sm" />
            <q-btn @click="nextStep" color="primary" :label="stepperButtonLabel" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
defineOptions({ name: 'ScheduleModal' });
import { QStepper } from 'quasar';
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
import { useRules } from 'src/composables/useRules';
import { useNotify } from 'src/composables/use-notify';
import useMvpService from 'src/services/mvpService';

// ------ Interface ------
interface IContactForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
}

// ------ Variables ------
// compose
const { t } = useI18n();
const rules = useRules();
const notify = useNotify();
const mvpService = useMvpService();

// Data
const step = ref<number>(1);
const contactFormRef = ref();
const tokenReservation = ref();
const stepperRef = ref<QStepper>();
const selectedSchedule = ref<string>();
const contactForm = ref<IContactForm>({});
const showModalModel = defineModel<boolean>('showModal', { required: true });

// ------ Props ------
const props = defineProps(['schedule', 'immigo']);

// ------ Computed ------
const stepperButtonLabel = computed<string>(() => (step.value === 2 ? t('submit') : t('continue')));

// ------ Methods ------
const nextStep = async () => {
  if (step.value === 1) {
    try {
      const [timeId, date] = selectedSchedule.value?.split('|') ?? [];
      const body = { checkTimes: [{ timeId, date }] };
      const response = await mvpService.reserveTime(props.immigo._id, body);
      tokenReservation.value = response.token;
      stepperRef.value?.next();
    } catch {
      notify.error('error');
    }
  } else {
    contactFormRef.value.validate().then(async (success: boolean) => {
      if (success) {
        try {
          const body = { ...contactForm.value, token: tokenReservation.value };
          const response = await mvpService.submitForm(tokenReservation.value, body);
          if (response.status >= 200 && response.status <= 209) {
            notify.success(response.message);
            showModalModel.value = false;
          }
        } catch (e: any) {
          notify.error(e.data.message);
        }
      } else notify.error(t('complete_form'));
    });
  }
};
const prevStep = () => stepperRef.value?.previous();
</script>
