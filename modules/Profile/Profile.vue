<script setup lang="ts">
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth.vue';
import MainAuth from '@/components/MainAuth/MainAuth.vue';
import MainContent from '@/modules/Profile/components/MainContent/MainContent.vue';
const props = defineProps({
  email: String,
});

const emit = defineEmits(['logout']);
const logout = () => emit('logout');
</script>

<template>
  <HeaderAuth :email="email" @logout="logout" />
  <MainAuth>
    <MainContent />
  </MainAuth>
</template>
