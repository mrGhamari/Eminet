<template>
  <q-card class="emigrant-card-wrapper fit q-pa-md column" bordered flat>
    <div class="row">
      <!-- Avatar -->
      <div class="emigrant-card__avatar">
        <q-avatar
          v-if="!immigo.user.image"
          square
          size="175px"
          icon="person"
          color="primary"
          text-color="white"
          class="rounded-borders"
        />
        <div v-else>
          <q-img
            crossorigin="anonymous"
            :src="'http://192.168.1.144:3000/' + immigo.user.image"
            width="175px"
            height="150px"
            class="rounded-borders"
          />
        </div>
      </div>

      <!-- Imigo Data -->
      <div class="col q-ml-md">
        <div class="row items-center justify-between full-width">
          <span class="text-bold text-h6">{{ fullName }}</span>
          <div>
            <q-btn
              color="red"
              dense
              :icon="liked ? 'favorite-fill' : 'favorite-outline'"
              flat
              @click="liked = !liked"
            />
          </div>
        </div>

        <div class="row items-center q-my-sm">
          <span class="text-h5">{{ immigo.user.location.country.flag }}</span>
          <span class="text-body2 text-grey-6 q-ml-sm">{{ countryName }}</span>
        </div>

        <div>
          <q-icon name="badge" size="xs" color="grey-5" />
          <span class="text-body2 text-grey-6 q-ml-sm">{{ $t('work_permit') }}</span>
        </div>
      </div>
    </div>
    <div class="row items-start justify-between q-col-gutter-x-md q-mt-md">
      <span class="text-body2 text-justify col">
        {{ immigo.user.biography }}
      </span>
      <div class="column col-2">
        <q-btn
          :label="$t('select')"
          color="primary"
          class="text-black"
          dense
          no-caps
          @click="openScheduleModal"
          style="border: 1px solid black"
        />
        <q-btn :label="$t('profile')" outline class="q-mt-sm" color="primary" dense no-caps />
      </div>
    </div>

    <!-- Button -->
    <div v-if="$q.screen.xs" class="q-mt-md column">
      <q-btn :label="$t('select')" unelevated color="primary" dense no-caps @click="openScheduleModal" />
      <q-btn :label="$t('profile')" unelevated class="q-mt-sm" color="primary" dense no-caps />
    </div>
  </q-card>
  <scheduleModal v-model:show-modal="showScheduleModal" :key="$q.lang.isoName" />
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantCard' });
import { useQuasar } from 'quasar';
import { computed, ref, toRefs } from 'vue';
import { IEmigrantCard } from 'src/types/pages/mvpService';
import scheduleModal from 'src/components/pagesComponent/emigrant/list/scheduleModal.vue';
// import { useUtility } from 'src/composables/use-utility';

// ------ Variables ------
const $q = useQuasar();

const liked = ref<boolean>(false);
const showScheduleModal = ref<boolean>(true);
// const utility = useUtility();

// ------ Props ------
const props = defineProps<IEmigrantCard>();
const { immigo } = toRefs(props);

// ------ Computed ------
const fullName = computed<string>(() => immigo.value.user.firstName + ' ' + immigo.value.user.lastName);
const countryName = computed<string>(() =>
  $q.lang.rtl ? immigo.value.user.location.country.name_fa : immigo.value.user.location.country.name_en
);

// ------ Methods ------
const openScheduleModal = () => (showScheduleModal.value = true);
</script>

<style lang="scss">
.emigrant-card-wrapper {
  &__avatar {
    width: fit-content;
  }
}
</style>
