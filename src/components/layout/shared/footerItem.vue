<template>
  <div class="fit row items-start justify-around q-py-lg footer">
    <div class="column">
      <div class="text-h6">About Us</div>
      <q-btn label="Who We Are" class="q-my-md" flat dense />
      <q-btn label="How it Work" flat dense />
    </div>
    <div class="column">
      <div class="text-h6">Contact Us</div>
      <div class="row items-center q-mt-md">
        <q-icon name="apartment" class="q-mr-md" />
        <span>Address: Tehran, afsarie, Garazh</span>
      </div>

      <div class="row items-center q-my-md">
        <q-icon name="mail" class="q-mr-md" />
        <span>Eminet@gmail.com</span>
      </div>

      <div class="row items-center">
        <q-icon name="phone" class="q-mr-md" />
        <a href="tel:+989339752422"> +98 9339752422</a>
      </div>
    </div>
    <div class="column">
      <div class="text-h6">Eminet Social</div>
      <div class="row items-center q-mt-md">
        <q-img :src="whiteInstagramIcon" width="15px" height="15px" class="q-mr-sm" />
        <a href="#">Instagram</a>
      </div>
      <div class="row items-center q-my-md">
        <q-img :src="whiteXLogo" width="15px" height="15px" class="q-mr-sm" />
        <a href="#">X</a>
      </div>
      <div class="row items-center">
        <q-img :src="whiteLinkedinLogo" width="15px" height="15px" class="q-mr-sm" />
        <a href="#">Linkedin</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import whiteXLogo from 'src/assets/images/white-x-logo.png';
import whiteLinkedinLogo from 'src/assets/images/white-linkedin-logo.png';
import whiteInstagramIcon from 'src/assets/images/white-instagram-icon.png';
</script>

<style scoped>
.footer {
  position: sticky;
  bottom: 0 !important;
}
</style>
