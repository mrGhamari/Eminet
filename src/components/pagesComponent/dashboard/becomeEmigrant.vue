<template>
  <q-card class="row items-center fit" bordered flat>
    <div :class="$q.screen.gt.sm ? 'col' : 'col-12'" class="full-height">
      <q-img src="src/assets/images/me.JPG" height="100%" />
    </div>
    <div class="column q-px-lg" :class="$q.screen.gt.sm ? 'col' : 'col-12'">
      <div class="text-h2 text-bold">{{ $t('become_emigrant') }}</div>
      <div class="text-body1 q-mt-md">
        {{ $t('become_emigrant_description') }}
      </div>

      <div>
        <ul>
          <li class="text-bold text-h6">{{ $t('first_become_item') }}</li>
          <li class="text-bold text-h6">{{ $t('second_become_item') }}</li>
          <li class="text-bold text-h6">{{ $t('third_become_item') }}</li>
        </ul>
      </div>

      <div>
        <q-btn
          :label="$t('become_emigrant')"
          color="black"
          class="q-mt-lg full-width"
          :icon-right="!$q.lang.rtl ? 'arrow_forward' : 'arrow_back'"
        />
      </div>
      <a class="text-black text-body1 text-bold text-center q-mt-md" href="#">{{ $t('how_work') }}</a>
    </div>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'BecomeEmigrant' });
import { useQuasar } from 'quasar';

// ------ Variables ------
const $q = useQuasar();
</script>

<style scoped></style>
