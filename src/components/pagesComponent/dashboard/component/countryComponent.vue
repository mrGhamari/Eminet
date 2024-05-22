<template>
  <q-card bordered flat clickable class="row items-center justify-between q-px-sm q-py-md cursor-pointer">
    <div class="row items-center">
      <q-icon name="public" size="lg" />
      <div class="column q-ml-lg">
        <span class="text-bold text-h5">{{ $t('britannia') }}</span>
        <span class="text-grey">21 {{ $t('person') }}</span>
      </div>
    </div>
    <div>
      <q-icon :name="$q.lang.rtl ? 'chevron_left' : 'chevron_right'" size="lg" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'CountryComponent' });
import { useQuasar } from 'quasar';

// ------ Variables ------
const $q = useQuasar();
</script>

<style scoped></style>
