<script setup lang="ts">
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth.vue';
import MainAuthForm from '@/components/MainAuthForm/MainAuthForm.vue';
import FormCreate from '@/modules/Edit/components/FormCreate/FormCreate.vue';

const props = defineProps({
  email: String,
});

const emit = defineEmits(['logout']);
const logout = () => emit('logout');
</script>

<template>
  <HeaderAuth :email="email" @logout="logout" />
  <MainAuthForm>
    <h1 class="text-2xl mb-5 text-center font-bold">Criar nova vaga</h1>
    <FormCreate />
  </MainAuthForm>
</template>
