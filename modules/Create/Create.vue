<script setup lang="ts">
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth.vue';
import MainAuth from '@/components/MainAuth/MainAuth.vue';

const props = defineProps({
  email: String,
});

const emit = defineEmits(['logout']);
const logout = () => emit('logout');

const router = useRouter();

const handleBack = () => {
  router.push('/profile');
};
</script>

<template>
  <HeaderAuth :email="email" @logout="logout" />
  <MainAuth>
    <h1 class="text-2xl mb-5 text-center font-bold">Criar nova vaga</h1>
    <Button
      label="Voltar"
      icon="pi pi-arrow-left"
      icon-pos="right"
      @click="handleBack"
    />
  </MainAuth>
</template>
