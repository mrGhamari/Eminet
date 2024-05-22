<template>
  <div class="base-select-wrapper fit">
    <div class="base-select-wrapper__label">
      <label>
        {{ label }}
        <span v-if="rules?.length" class="text-negative"> * </span>
      </label>
    </div>

    <q-select
      dense
      outlined
      :rules="rules"
      v-model="model"
      :disable="disable"
      :multiple="isMultiple"
      :use-chips="isMultiple"
      :emit-value="emitValue"
      :options="filterOptions"
      :map-options="mapOption"
      :option-label="optionLabel"
      :option-value="optionValue"
      :placeholder="placeholderComputed"
      class="base-select-wrapper__select"
      :class="bgWhite ? 'bg-white' : ''"
      popup-content-class="no-shadow popup-base-select-class"
      @filter="filterFn"
    >
      <!-- options Slot -->
      <template #option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label v-if="optionLabel">{{ scope.opt[optionLabel] }}</q-item-label>
            <q-item-label v-else>{{ scope.opt }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <!-- No Option Slot -->
      <template #no-option>
        <q-item>
          <q-item-section>
            <div class="text-bold">Nothing found</div>
          </q-item-section>
        </q-item>
      </template>

      <!-- Clear Button Slot -->
      <!-- <template v-if="model && !isMultiple" #append>
        <q-icon
          color="secondary"
          class="cursor-pointer"
          name="rIcon:icon-trush-square"
          @click.stop.prevent="model = null"
        />
      </template> -->
    </q-select>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, computed } from 'vue';
import { IBaseSelect } from 'src/types/shared/baseSelect';

// ------ Lifecycle ------
onMounted(() => (filterOptions.value = options.value ? [...options.value] : []));

// ------ Variables ------
const filterOptions = ref<unknown[]>([]);
const model = defineModel<string | unknown[] | null>({ required: true });

// ------ Props And Emits ------
const props = defineProps<IBaseSelect>();
const {
  options,
  isMultiple,
  label,
  optionValue,
  optionLabel,
  disable,
  rules,
  placeholder,
  mapOption,
  emitValue,
  bgWhite,
} = toRefs(props);

// ------ computed ------
const placeholderComputed = computed(() => {
  let computedText: string | undefined;
  if (isMultiple.value && !model.value?.length) computedText = placeholder.value;
  else if (!model.value) computedText = placeholder.value;
  return computedText;
});

// ------ Methods ------
const filterFn = (val: string, update: (arg0: () => void) => void) => {
  update(() => {
    if (!val) filterOptions.value = options.value;
    else
      filterOptions.value = options.value.filter(
        (item) => item[optionLabel.value].toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1
      );
  });
};
</script>

<style lang="scss">
.base-select-wrapper {
  &__select {
    border-radius: 8px !important;

    .q-field__native {
      span {
        font-size: 16px;
        font-weight: 500;
        color: $secondary;
      }
    }

    .q-placeholder {
      font-size: 16px;
      font-weight: 500;
      color: $secondary;
    }
  }
}

.popup-base-select-class {
  box-shadow: none;
  border: 1px solid $grey-3;
  margin-top: 8px !important;
}
</style>
