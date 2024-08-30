<template>
  <q-page class="fit">
    <div class="row">
      <div :class="$q.screen.gt.sm ? 'col-8 offset-2' : 'col-12 q-px-md'">test</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'MvpLanding' });
</script>
