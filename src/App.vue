<template>
  <router-view />
</template>

<script setup lang="ts">
defineOptions({ name: 'App' });
import { useLocale } from 'src/composables/use-locale';

const locale = useLocale();

// ------ Methods ------
locale.loadLastState();
</script>
