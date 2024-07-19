<template>
  <div class="fit emigrant-card">
    <q-card class="fit card q-py-md q-px-sm row justify-between" bordered flat>
      <div class="row items-start">
        <q-img :src="PouyaPicture" :ratio="1" width="150px" height="150px" />
        <div class="column q-ml-md">
          <span class="text-h6 text-bold">Pouya Farahani</span>
          <div class="row items-center q-mt-md">
            <q-icon name="language" size="xs" color="grey-5" />
            <span class="text-body2 text-grey-6 q-ml-sm">England</span>
          </div>
          <div class="row items-center q-my-sm">
            <q-icon name="badge" size="xs" color="grey-5" />
            <span class="text-body2 text-grey-6 q-ml-sm">WorkPermit</span>
          </div>
          <div class="emigrant-card__description text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nemo explicabo ipsam deserunt natus
            facilis quaerat sapiente inventore suscipit amet!
          </div>
        </div>
      </div>
      <div class="column">
        <div class="col row items-start justify-between">
          <span class="text-bold text-h5"> New </span>
          <span class="text-bold text-h5"> 17$ </span>
        </div>
        <div class="col row items-end">
          <q-btn color="primary" outline label="Send Message" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmigrantCard' });
import PouyaPicture from 'src/assets/images/pouya.jpg';
</script>

<style lang="scss" scoped>
.emigrant-card {
  .emigrant-card__description {
    width: 300px;
  }
}
</style>
