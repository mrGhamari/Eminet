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

    <!-- Imigo Data -->
    <div class="column" :class="$q.screen.xs ? 'q-mt-md' : 'col q-pl-md'">
      <div class="row items-center justify-between">
        <span class="text-bold text-h6">پارسا بیکی</span>
        <div class="row items-center">
          <!-- <span class="text-bold text-h6 q-mr-lg">{{ utility.seprateNumber(500000) }} {{ $t('rial') }}</span> -->
          <q-btn color="red" dense :icon="liked ? 'favorite-fill' : 'favorite-outline'" flat @click="liked = !liked" />
        </div>
      </div>
      <div class="row items-center q-mt-md">
        <q-icon name="language" size="xs" color="grey-5" />
        <span class="text-body2 text-grey-6 q-ml-sm">England</span>
      </div>
      <div class="row items-center q-my-md">
        <q-icon name="badge" size="xs" color="grey-5" />
        <span class="text-body2 text-grey-6 q-ml-sm">WorkPermit</span>
      </div>

      <div class="row">
        <div :class="$q.screen.gt.xs ? 'row items-end q-col-gutter-x-md' : ''">
          <span class="col text-body2 text-justify">
            سلام من پارسا بیکی هستم خیلی سال هستش که از طریق کون دادن و گی کردن پناهنده شدم امیدوارم بتونم کمکتون کنم در
            مسیر کون دادن
          </span>
          <div class="col-2 column">
            <q-btn
              v-if="$q.screen.gt.xs"
              :label="$t('select')"
              class="fit"
              color="primary"
              text-color="black"
              no-caps
            />
            <q-btn v-if="$q.screen.gt.xs" :label="$t('profile')" class="fit q-mt-md" color="black" no-caps outline />
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div v-if="$q.screen.xs" class="fit q-mt-md">
      <q-btn :label="$t('select')" color="primary" class="fit" no-caps />
      <q-btn :label="$t('profile')" color="primary" class="fit" no-caps />
    </div>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantCard' });
import { ref } from 'vue';
import PouyaPicture from 'src/assets/images/pouya.jpg';
// import { useUtility } from 'src/composables/use-utility';

// ------ Variables ------
const liked = ref<boolean>(false);
// const utility = useUtility();
</script>
