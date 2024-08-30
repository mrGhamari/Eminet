<template>
  <q-page class="mvp-landing fit">
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'">
        <div
          :class="$q.screen.gt.sm ? 'row items-center q-col-gutter-x-md q-mt-md' : 'column q-col-gutter-y-md q-mt-sm'"
        >
          <div class="col">
            <base-select :label="$t('country')" />
          </div>
          <div class="col">
            <base-select :label="$t('migration_method')" />
          </div>
          <div class="col">
            <base-select :label="$t('gender')" />
          </div>
        </div>
        <div class="full-width q-mt-md">
          <q-btn color="primary" class="full-width" label="Submit" />
        </div>
        <div class="card-section column q-col-gutter-y-md q-my-sm">
          <Emigrant-card v-for="(item, index) in 8" :key="index" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'MvpLanding' });
import EmigrantCard from 'src/components/pagesComponent/emigrant/list/emigrantCard.vue';
</script>

<style lang="scss" scoped>
.mvp-landing {
}
</style>
