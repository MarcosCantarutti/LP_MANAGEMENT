<template>
  <div class="bg-white shadow-md rounded-md p-4 mb-4">
    <div class="font-semibold text-lg mb-2">{{ title }}</div>
    <div class="text-gray-600 mb-2">Modalidade: {{ modality }}</div>
    <div class="text-gray-700 mb-2">Tipo de contrato: {{ contract_type }}</div>
    <div class="text-gray-500">Cidade: {{ city }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  modality: String,
  contract_type: String,
  city: String,
});
</script>
