<template>
  <div class="base-input-wrapper">
    <div class="base-input-wrapper__label">
      <label>
        {{ label }}
        <span v-if="required" class="text-negative"> * </span>
      </label>
    </div>

    <div class="base-input-wrapper__input">
      <q-input dense outlined lazy-rules :rows="rows" :rules="rules" v-bind="$attrs" v-model="model" :bg-color="bgColor"
        :readonly="readonly" :autofocus="autofocus" :maxlength="maxLength" :placeholder="placeholder"
        :type="type ? type : 'text'">
        <template v-if="isSearch" #prepend>
          <q-icon class="search-icon" name="rIcon:icon-search-normal" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script setup lang="ts">
name: 'BaseInput';
import { computed } from 'vue';
import { IBaseInput } from 'src/types/shared/baseInput/index';

// ------ Props ------
const props = defineProps<IBaseInput>();

// ------ Variables ------
const model = defineModel<string | number | null | undefined>({ required: true });

// ------ Computed ------
const rules = computed(() => {
  const list = [props.rules].flat().filter(Boolean);
  if (props.required) list.unshift((val: string | number | null | undefined) => !!val || 'Required');
  return list;
});
</script>
