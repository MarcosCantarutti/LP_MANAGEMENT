<template>
  <header
    class="min-h-screen flex flex-col items-center gap-2 justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <span class="font-bold"
      >LP DESENVOLVIMENTO - SISTEMA DE GERENCIAMENTO DE VAGAS</span
    >
    <Button label="Realizar login" icon="pi pi-user" @click="handleLogin" />
  </header>
</template>

<script setup>
import HomeLogin from '~/modules/HomeLogin/HomeLogin.vue';
const router = useRouter();

const handleLogin = () => {
  router.push('/login');
};
</script>
