<template>
  <q-page class="fit">
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'">
        <div class="row items-center q-col-gutter-x-md q-mt-md">
          <div class="col">
            <base-select :label="$t('country')" />
          </div>
          <div class="col">
            <base-select :label="$t('migration_method')" />
          </div>
          <div class="col">
            <base-select :label="$t('gender')" />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'MvpLanding' });
</script>
