<template>
  <router-view />
</template>

<script setup lang="ts">
defineOptions({ name: 'App' });
import { useIcon } from 'src/composables/use-icon';
import { useLocale } from 'src/composables/use-locale';

// ------ Variables ------
const icon = useIcon();
const locale = useLocale();

// ------ Methods ------
icon.loadIcon();
locale.loadLastState();
</script>
