<script setup>
const router = useRouter();

const handleCreate = () => {
  router.push('/create');
};

const handleList = () => {
  router.push('/list');
};
</script>

<template>
  <h1 class="text-2xl mb-5 text-center font-bold">
    Crie e gerencie suas vagas
  </h1>
  <section class="flex gap-5 justify-center items-center">
    <Button
      label="Criar nova vaga"
      icon="pi pi-plus-circle"
      icon-pos="right"
      @click="handleCreate"
    />
    <Button
      label="Lista de vagas"
      icon="pi pi-list"
      icon-pos="right"
      @click="handleList"
    />
  </section>
</template>
