<template>
  <div class="bg-white shadow-md rounded-md p-4 mb-4">
    <div class="font-semibold text-lg mb-2">{{ title }}</div>
    <div class="text-gray-600 mb-2">{{ company }}</div>
    <div class="text-gray-700 mb-2">{{ job }}</div>
    <div class="text-gray-500">{{ description }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  job: String,
  title: String,
  company: String,
  description: String,
});
</script>
