<template>
  <div class="bg-white shadow-md rounded-md p-4 mb-4">
    <div class="font-semibold text-lg mb-2">{{ title }}</div>
    <div class="text-gray-600 mb-2">Modalidade: {{ modality }}</div>
    <div class="text-gray-600 mb-2">Tipo de contrato: {{ contract_type }}</div>
    <div class="text-gray-600 mb-2">Cidade: {{ city }}</div>
    <div>
      <p class="text-gray-600">
        Status da vaga:
        <span v-if="active" class="text-green-700 ml-1">Ativa</span>
        <span v-else class="text-red-700 ml-1">Inativa</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  modality: String,
  contract_type: String,
  city: String,
  active: Boolean,
});
</script>
