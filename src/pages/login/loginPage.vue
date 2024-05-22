<template>
  <q-page class="fit row justify-center align-center">
    <q-form
      ref="loginFormRef"
      @submit="onSubmit"
      @reset="onReset"
      class="col-4 column justify-center items-center q-col-gutter-sm"
    >
      <div class="text-h4">لوگو امینت</div>
      <div class="text-subtitle1 text-grey">به امینت خوش آمدید :)</div>
      <q-input
        outlined
        class="full-width"
        :label="$t('userName')"
        :rules="[rules.required]"
        v-model="loginForm.userName"
      />
      <q-input
        outlined
        class="full-width"
        :label="$t('password')"
        :rules="[rules.required]"
        v-model="loginForm.password"
      />
      <q-btn
        class="full-width"
        size="md"
        color="primary"
        :label="$t('login')"
        type="submit"
        :loading="loading"
        @keyup.enter="onSubmit"
      />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRules } from 'src/composables/useRules';

// ------ Variables ------
const rules = useRules();
const router = useRouter();
const loading = ref<boolean>(false);
const loginFormRef = ref<HTMLFormElement>();
const loginForm: { userName?: string; password?: string } = reactive({});

// ------ Methods ------
const onSubmit = () => {
  loading.value = true;
  try {
    loginFormRef.value?.validate().then((valid: boolean) => {
      if (valid) {
        localStorage.setItem('Auth', 'true');
        router.push({ name: 'Dashboard' });
      }
    });
  } catch (e) {
  } finally {
    loading.value = false;
  }
};
const onReset = () => loginFormRef.value?.reset();
</script>
