<template>
  <q-card class="emigrant-card-wrapper fit q-pa-md column" bordered flat>
    <div class="row">
      <!-- Avatar -->
      <div class="emigrant-card__avatar">
        <q-avatar
          v-if="!immigo.user.media_assets.image_path"
          square
          size="200px"
          icon="person"
          color="primary"
          text-color="white"
          class="rounded-borders"
        />
        <div v-else>
          <q-img
            crossorigin="anonymous"
            :src="'http://192.168.1.144:3000/' + immigo.user.media_assets.image_path"
            width="200px"
            height="200px"
            class="rounded-borders"
          />
        </div>
      </div>

      <!-- Imigo Data -->
      <div class="col q-ml-md">
        <div class="row items-center justify-between full-width">
          <div class="row items-center">
            <span class="text-bold text-h6">{{ fullName }}</span>
            <q-icon name="verified" color="blue" size="sm" class="q-ml-sm" />
          </div>

          <div class="row items-center">
            <div class="text-h6 text-bold q-mr-lg">New</div>
            <q-btn
              color="red"
              dense
              :icon="liked ? 'favorite-fill' : 'favorite-outline'"
              flat
              @click="liked = !liked"
            />
          </div>
        </div>

        <div class="row items-center">
          <span class="text-h5">{{ immigo.user.location.country.flag }}</span>
          <span class="text-body2 text-grey-6 q-ml-sm">{{ countryName }}</span>
        </div>

        <div class="q-my-sm">
          <q-icon name="badge" size="xs" color="grey-5" />
          <span class="text-body2 text-grey-6 q-ml-sm">{{ $t('work_permit') }}/ Developer</span>
        </div>
        <div>
          <q-icon name="interpreter_mode" size="xs" color="grey-5" />
          <span class="text-body2 text-grey-6 q-ml-sm">32 active student</span>
        </div>
        <div class="row items-end justify-between q-col-gutter-x-md q-mt-md">
          <span class="text-body2 text-justify col">
            {{ showFullImmigoDescription ? immigo.user.biography : immigo.user.biography.substring(0, 150) }}
            <q-btn
              :label="showFullImmigoDescription ? 'close' : 'Read More'"
              color="primary"
              flat
              dense
              @click="showFullImmigoDescription = !showFullImmigoDescription"
            />
          </span>
          <div v-if="$q.screen.gt.xs" class="column col-5">
            <q-btn
              :label="$t('select')"
              color="primary"
              class="text-black"
              dense
              no-caps
              @click="openScheduleModal(immigo)"
              style="border: 1px solid black"
            />
            <q-btn :label="$t('profile')" outline class="q-mt-sm" color="primary" dense no-caps />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row items-start justify-end q-mt-md">
      <div class="column col-2">
        <q-btn
          :label="$t('select')"
          color="primary"
          class="text-black"
          dense
          no-caps
          @click="openScheduleModal(immigo)"
          style="border: 1px solid black"
        />
        <q-btn :label="$t('profile')" outline class="q-mt-sm" color="primary" dense no-caps />
      </div>
    </div> -->

    <!-- Button -->
    <div v-if="$q.screen.xs" class="q-mt-md column">
      <q-btn :label="$t('select')" unelevated color="primary" dense no-caps @click="openScheduleModal(immigo)" />
      <q-btn :label="$t('profile')" unelevated class="q-mt-sm" color="primary" dense no-caps />
    </div>
  </q-card>
  <scheduleModal
    v-model:show-modal="showScheduleModal"
    :schedule="scheduleList"
    :immigo="selectedImmigo"
    :key="$q.lang.isoName"
  />
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantCard' });
import { useQuasar } from 'quasar';
import { computed, ref, toRefs } from 'vue';
import { IEmigrantCard, IImmigo } from 'src/types/pages/mvpService';
import scheduleModal from 'src/components/pagesComponent/emigrant/list/scheduleModal.vue';
import useMvpService from 'src/services/mvpService';
import { useConst } from 'src/composables/use-const';
import { useUtility } from 'src/composables/use-utility';
import { useI18n } from 'vue-i18n';
import { useNotify } from 'src/composables/use-notify';

// ------ Variables ------
const $q = useQuasar();
const { t } = useI18n();
const notify = useNotify();
const mvpService = useMvpService();
const liked = ref<boolean>(false);
const scheduleList = ref();
const constCompose = useConst();
const utility = useUtility();
const showScheduleModal = ref<boolean>(false);
// const utility = useUtility();
const selectedImmigo = ref<IImmigo>();
const showFullImmigoDescription = ref<boolean>(false);

// ------ Props ------
const props = defineProps<IEmigrantCard>();
const { immigo } = toRefs(props);

// ------ Computed ------
const fullName = computed<string>(() => immigo.value.user.firstName + ' ' + immigo.value.user.lastName);
const countryName = computed<string>(() =>
  $q.lang.rtl ? immigo.value.user.location.country.name_fa : immigo.value.user.location.country.name_en
);

// ------ Methods ------
const openScheduleModal = async (immigo: IImmigo) => {
  selectedImmigo.value = immigo;
  try {
    const response = await mvpService.getAllScheduleImmigo(immigo._id);
    scheduleList.value = response
      .filter((item) => item.status == 'CREATED')
      .map((item) => ({
        label: `${t(constCompose.daysConvertor(item.day))}(${utility.convertGeorgianDateToJalali(item.date)}): ${
          item.from
        } - ${item.to}`,
        value: `${item._id}|${item.date}`,
      }));
    showScheduleModal.value = true;
  } catch {
    notify.error("error : can't oepn modal");
  }
};
</script>

<style lang="scss">
.emigrant-card-wrapper {
  &__avatar {
    width: fit-content;
  }
}
</style>
