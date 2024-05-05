<template>
  <div>
    <input
      v-model="searchTerm"
      placeholder="Filtrar por título"
      class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full mt-5"
    />

    <div v-if="loading" class="flex items-center mt-5">
      <ProgressSpinner />
    </div>

    <div v-else class="grid gap-3">
      <Card
        v-for="vaga in filteredList"
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
        :active="vaga.active"
        @click="editVaga(vaga.id)"
        class="cursor-pointer"
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
  </div>
</template>

<script setup>
import Card from '@/modules/List/components/Card/Card.vue';
import { fetchVacancy } from '~/composables/useService/useService'; // Importe o serviço

const router = useRouter();
const currentPage = ref(1);
const itemsPerPage = 10; // Número de itens por página

const listData = ref([]);
let loading = ref(false);
const searchTerm = ref('');

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
  loading.value = true;
  const { data, error } = await fetchVacancy(
    currentPage.value,
    searchTerm.value,
    itemsPerPage
  );

  if (error) {
    console.error('Erro ao carregar listagem', error.message);
  } else {
    listData.value = data;
  }

  loading.value = false;
};

const filteredList = computed(() => {
  return listData.value.filter((vaga) => {
    return vaga.title.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});

onMounted(() => {
  fetchVagas();
});
</script>
