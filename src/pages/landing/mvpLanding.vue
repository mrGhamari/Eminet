<template>
  <q-page class="mvp-landing fit">
    <div class="row">
      <div :class="$q.screen.gt.md ? 'col-8 offset-2' : 'col-12 q-px-md'">
        <!-- Filters -->
        <div
          :class="$q.screen.gt.sm ? 'row items-center q-col-gutter-x-md q-mt-md' : 'column q-col-gutter-y-md q-mt-sm'"
        >
          <div class="col">
            <base-select
              :label="$t('country')"
              :options="countryList"
              optionLabel="label"
              optionValue="value"
              v-model="filters.country"
            />
          </div>

          <div class="col">
            <base-select
              :label="$t('migration_method')"
              :options="migrationMethodList"
              optionLabel="label"
              optionValue="value"
              v-model="filters.migrationMethod"
            />
          </div>

          <div class="col">
            <base-select
              :label="$t('gender')"
              :options="genderList"
              optionLabel="label"
              optionValue="value"
              v-model="filters.gender"
            />
          </div>
        </div>

        <div class="full-width q-mt-md">
          <q-btn :label="$t('submit')" color="primary" no-caps unelevated class="full-width" />
        </div>

        <!-- Emigrant Card -->
        <div class="column q-mb-sm">
          <div v-for="(item, index) in immigoList" :key="index" class="row q-col-gutter-md q-mt-md">
            <div class="col">
              <Emigrant-card
                :class="index === 1 ? 'emigrant-card' : ''"
                @mouseover="hoverEmigrant(index)"
                :immigo="item"
              />
            </div>

            <div class="col-4" v-if="$q.screen.gt.sm">
              <q-card v-if="index == hoveredIndex" class="full-height">
                <q-video :ratio="16 / 9" class="full-height" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'MvpLanding' });
import { useI18n } from 'vue-i18n';
import { ref, onMounted, computed } from 'vue';
import useMvpService from 'src/services/mvpService';
import { IImmigo } from 'src/types/pages/mvpService';
import EmigrantCard from 'src/components/pagesComponent/emigrant/list/emigrantCard.vue';

// ------ LifeCycle ------
onMounted(async () => await getAllImmigo());

// ------ Variables ------
// Compose
const { t } = useI18n();
const mvpService = useMvpService();
// Data
const hoveredIndex = ref<number>(0);
const immigoList = ref<IImmigo[]>([
  {
    user: {
      image: 'string',
      lastName: 'string',
      firstName: 'string',
      biography: 'string',

      location: {
        town: {
          name_en: 'string',
          name_fa: 'string',
        },
        country: {
          flag: 'string',
          name_en: 'string',
          name_fa: 'string',
        },
      },
    },
    _id: 'string',
    price: 0,
    days: [0, 1, 2, 3],
    length: 0,
    status: 'string',
    platforms: ['string'],
  },
]);
const filters = ref<{ country?: string; gender?: string; migrationMethod?: string }>({});

// ------ Computed ------
const countryList = computed<{ label: string; value: string }[]>(() => [{ label: t('canada'), value: 'canada' }]);
const genderList = computed<{ label: string; value: string }[]>(() => [
  { label: t('male'), value: 'male' },
  { label: t('female'), value: 'female' },
]);
const migrationMethodList = computed<{ label: string; value: string }[]>(() => [
  { label: t('work_permit'), value: 'workPermit' },
]);

// ------ Methods ------
const hoverEmigrant = (index: number) => (hoveredIndex.value = index);

// ------ Services ------
const getAllImmigo = async () => {
  try {
    const response = await mvpService.getAllImmigo();
    immigoList.value = response.docs;
  } catch (e) {}
};
</script>

<style lang="scss">
.mvp-landing {
  .emigrant-card {
    border: 2px solid black;
  }
}
</style>
