<script setup lang="ts">
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth.vue';
import MainAuthForm from '@/components/MainAuthForm/MainAuthForm.vue';
import ListVagas from '@/modules/List/components/ListVagas/ListVagas.vue';

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
  <MainAuthForm>
    <div class="flex gap-5 items-center justify-center">
      <h1 class="text-2xl text-center font-bold">Lista de vagas disponivel</h1>
      <Button
        label="Voltar"
        icon="pi pi-arrow-left"
        icon-pos="right"
        @click="handleBack"
      />
    </div>
    <ListVagas />
  </MainAuthForm>
</template>
