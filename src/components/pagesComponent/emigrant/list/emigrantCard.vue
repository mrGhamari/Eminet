<template>
  <q-card class="emigrant-card fit q-pa-md q-mt-md" :class="$q.screen.xs ? 'column' : 'row items-start'" bordered flat>
    <!-- Avatar -->
    <div class="emigrant-card__avatar" :class="$q.screen.xs ? 'text-center' : 'text-left'">
      <q-avatar
        v-if="!PouyaPicture"
        square
        size="175px"
        icon="person"
        color="primary"
        text-color="white"
        class="rounded-borders"
      />
      <q-img v-else :src="PouyaPicture" width="175px" height="175px" class="rounded-borders" />
    </div>

    <div class="column" :class="$q.screen.xs ? 'q-mt-md' : 'col q-pl-md'">
      <div class="row items-center justify-between">
        <span class="text-bold text-h6">Parsa Beyki</span>
        <span class="text-bold text-h6">500,000 Rial</span>
      </div>
      <div class="row items-center q-mt-md">
        <q-icon name="language" size="xs" color="grey-5" />
        <span class="text-body2 text-grey-6 q-ml-sm">England</span>
      </div>
      <div class="row items-center q-my-md">
        <q-icon name="badge" size="xs" color="grey-5" />
        <span class="text-body2 text-grey-6 q-ml-sm">WorkPermit</span>
      </div>

      <div class="emigrant-card__description text-justify">
        <span class="text-body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nemo explicabo ipsam deserunt natus
          facilis quaerat sapiente inventore suscipit amet!
        </span>
      </div>
    </div>
    <div class="fit q-mt-md">
      <q-btn label="Submit" color="primary" class="fit" no-caps />
    </div>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantCard' });
import PouyaPicture from 'src/assets/images/pouya.jpg';
</script>
