<template>
  <div v-if="loading" class="flex itens-center mt-5">
    <ProgressSpinner />
  </div>

  <div v-else class="grid gap-3">
    <Card
      class="cursor-pointer"
      v-for="vaga in listData"
      @click="editVaga(vaga.id)"
      :key="vaga.id"
      :created_at="vaga.created_at"
      :city="vaga.city"
      :company="vaga.company"
      :title="vaga.title"
      :contract_type="vaga.contract_type"
      :responsibilities="vaga.responsibilities"
      :requiriments="vaga.requiriments"
      :more_information="vaga.more_information"
      :benefits="vaga.benefits"
      :modality="vaga.modality"
    />
  </div>
  <div class="pagination flex gap-5 justify-center items-center mt-5">
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-l cursor-pointer hover:bg-gray-300"
    >
      Anterior
    </button>
    <span class="px-4 py-2 text-gray-700"> Página {{ currentPage }} </span>
    <button
      @click="nextPage"
      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r cursor-pointer hover:bg-gray-300"
    >
      Próxima
    </button>
  </div>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js';
import Card from '@/modules/List/components/Card/Card.vue';
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const supabase = createClient(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

const currentPage = ref(1);
const itemsPerPage = 10; // Número de itens por página

const listData = ref([]);
let loading = ref(false);

const editVaga = (id) => {
  console.log(id);
  router.push(`/edit/${id}`);
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchVagas();
  }
};

const nextPage = () => {
  currentPage.value++;
  fetchVagas();
};

const fetchVagas = async () => {
  try {
    loading.value = true;
    const offset = (currentPage.value - 1) * itemsPerPage;
    const { data: vagas, error } = await supabase
      .from('vagas')
      .select('*')
      .range(offset, offset + itemsPerPage - 1);

    if (error) {
      console.error('Erro ao carregar listagem', error.message);
    } else {
      listData.value = vagas;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchVagas();
});
</script>
