<template>
  <q-dialog v-model="showModalModel" persistent>
    <q-card>
      <q-card-section class="columns items-center">
        <div class="text-bold text-h5">Schedule Modal</div>
        <q-option-group v-model="selectedSchedule" inline color="secondary" :options="scheduleOptions" />
      </q-card-section>
      <!-- <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>
      </q-card-section> -->
      <q-card-actions align="right">
        <q-btn flat :label="$t('cancel')" color="primary" v-close-popup />
        <q-btn :label="$t('submit')" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
defineOptions({ name: 'ScheduleModal' });
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConst } from 'src/composables/use-const';

// ------ Lifecycle ------
onMounted(() => refactorSchedule());

// ------ Variables ------
const { t } = useI18n();
// const tab = ref('mails');
const constCompose = useConst();
const selectedSchedule = ref<string>();
const showModalModel = defineModel<boolean>('showModal', { required: true });
const scheduleOptions = ref<{ label: string; value: string }[]>([]);
const times = ref([
  {
    date: '2024-10-06',
    _id: '66fe73551f62c4af89817a87',
    from: '15:04',
    to: '16:04',
    day: 1,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
  {
    date: '2024-10-13',
    _id: '66fe73551f62c4af89817a87',
    from: '15:04',
    to: '16:04',
    day: 1,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
  {
    date: '2024-10-06',
    _id: '66fe73551f62c4af89817a86',
    from: '15:04',
    to: '16:04',
    day: 1,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
  {
    date: '2024-10-13',
    _id: '66fe73551f62c4af89817a86',
    from: '15:04',
    to: '16:04',
    day: 1,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
  {
    date: '2024-10-05',
    _id: '66fe73551f62c4af89817a85',
    from: '16:04',
    to: '05:04',
    day: 0,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
  {
    date: '2024-10-12',
    _id: '66fe73551f62c4af89817a85',
    from: '16:04',
    to: '05:04',
    day: 0,
    status: 'CREATED',
    room: {
      _id: '66fe72cf1f62c4af89817a65',
      price: 8500,
      length: 8500,
    },
  },
]);

// ------ Methods ------
const refactorSchedule = () => {
  scheduleOptions.value = times.value.map((item) => ({
    label: `${t(constCompose.daysConvertor(item.day))}(${item.date}): ${item.from} - ${item.to}`,
    value: item._id,
  }));
};
</script>
