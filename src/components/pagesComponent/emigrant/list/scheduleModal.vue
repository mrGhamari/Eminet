<template>
  <q-dialog v-model="showModalModel" :backdrop-filter="'brightness(20%)'" persistent>
    <q-card class="scroll">
      <div class="row justify-between q-pa-md">
        <div class="row items-center">
          <q-img
            crossorigin="anonymous"
            :src="'http://192.168.1.144:3000/' + immigo.user.media_assets.image_path"
            width="50px"
            height="50px"
            class="rounded-borders"
          />
          <div class="column q-ml-md">
            <span class="text-bold text-h6">{{ immigo.user.firstName + ' ' + immigo.user.lastName }}</span>
            <span class="text-subtitle2 text-grey-6">Unknown Text</span>
          </div>
        </div>

        <q-btn icon="close" flat v-close-popup dense />
      </div>

      <q-separator />

      <div class="column q-pa-md">
        <div style="display: flex; gap: 12px; overflow: scroll !important" class="fit">
          <div class="column items-center col-2" v-for="(item, index) in schedule" :key="index">
            <span>{{ item.day }}</span>
            <q-btn :label="item.date" outline @click="selectedScheduleDayHandler(item.date)" />
          </div>
        </div>
      </div>

      <q-separator />

      <div class="row q-col-gutter-md q-pa-sm" v-if="selectedDayTimes">
        <div class="col" v-for="(item, index) in selectedDayTimes.schedule" :key="index">
          <q-btn
            color="primary"
            :label="item.from + ' - ' + item.to"
            :outline="selectedSchedule != item.label"
            @click="selectSchedule(item)"
          />
        </div>
      </div>
      <div class="fit q-pa-sm">
        <q-btn @click="submitSelectedSchedule" color="primary" class="full-width" :label="$t('select')" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
defineOptions({ name: 'ScheduleModal' });
// import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
// import { useRules } from 'src/composables/useRules';
import { useNotify } from 'src/composables/use-notify';
import useMvpService from 'src/services/mvpService';
import { ISchedule } from 'src/types/pages/mvpService';
import { useRouter } from 'vue-router';

// ------ Variables ------
// compose
// const { t } = useI18n();
// const rules = useRules();
const router = useRouter();
const notify = useNotify();
const mvpService = useMvpService();

// Data
const loading = ref<boolean>(false);
const selectedSchedule = ref();
const selectedScheduleDay = ref<string>();
const showModalModel = defineModel<boolean>('showModal', { required: true });

// ------ Props ------
const props = defineProps(['schedule', 'immigo']);

// ------ Computed ------
const selectedDayTimes = computed(() =>
  props.schedule.find((item: ISchedule) => item.date === selectedScheduleDay.value)
);

// ------ Methods ------
const selectSchedule = (selectedScheduleData: string) => (selectedSchedule.value = selectedScheduleData);
const selectedScheduleDayHandler = (scheduleDay: string) => (selectedScheduleDay.value = scheduleDay);
const submitSelectedSchedule = async () => {
  loading.value = true;
  try {
    const { timeId, date } = selectedSchedule.value;
    const body = { checkTimes: [{ timeId, date }] };
    const response = await mvpService.reserveTime(props.immigo._id, body);
    router.push({ name: 'Checkout', params: { token: response.token } });
  } catch (e: any) {
    notify.error(e.response.data.message);
  } finally {
    loading.value = false;
  }
};
</script>
