<script setup>
const props = defineProps({
  email: String,
});

const emit = defineEmits(['logout']);
</script>

<template>
  <header
    class="flex justify-around items-center gap-2 h-20 bg-gray-800 text-white"
  >
    <h1 class="text-2xl">Usuário atual: {{ email }}</h1>
    <Button
      label="Sair"
      icon="pi pi-sign-out"
      icon-pos="right"
      @click="() => emit('logout')"
    />
  </header>
</template>
