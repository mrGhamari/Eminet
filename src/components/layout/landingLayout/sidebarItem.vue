<template>
  <div class="sidebar-item q-py-xl q-px-xl column fit">
    <div class="row items-center justify-between">
      <div class="row items-center">
        <q-avatar color="blue-1" size="md" square class="rounded-borders">
          <q-icon name="person" />
        </q-avatar>
        <q-btn flat :label="$t('login')" no-caps unelevated />
      </div>
      <q-btn flat icon="close" dense size="md" @click="$emit('closeModal')" />
    </div>
    <q-separator class="q-my-md" />
    <q-item v-for="(item, index) in sidebar" :key="index" class="rounded-bordersq-pa-none" clickable>
      <div class="row items-center">
        <q-item-section class="text-h6">
          {{ item.label }}
        </q-item-section>
      </div>
    </q-item>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'SidebarItems' });
import { ref } from 'vue';

// ------ Variables ------
const sidebar = ref([{ name: 'test', label: 'test', path: '' }]);

// ------ Emit ------
const $emit = defineEmits<{ (e: 'closeModal'): void }>();
</script>
