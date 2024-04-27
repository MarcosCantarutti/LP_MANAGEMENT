<template>
  <HeaderAuth :email="email" @logout="logout" />
  <MainAuthForm>
    <div class="flex gap-5 items-center mb-5 justify-center">
      <Button
        label="Voltar"
        icon="pi pi-arrow-left"
        icon-pos="left"
        @click="handleBack"
      />
      <h1 class="text-2xl text-center font-bold">Editar vaga</h1>
    </div>

    <FormEdit :id="route.params.id" />
  </MainAuthForm>
</template>

<script setup>
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth.vue';
import MainAuthForm from '@/components/MainAuthForm/MainAuthForm.vue';
import FormEdit from '@/modules/Edit/components/FormEdit/FormEdit.vue';

const props = defineProps({
  email: String,
});

const handleBack = () => {
  router.push('/list');
};

const route = useRoute();
const router = useRouter();
const emit = defineEmits(['logout']);
const logout = () => emit('logout');
</script>
