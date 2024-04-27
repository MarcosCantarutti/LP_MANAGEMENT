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
      :job="vaga.city"
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

const listData = ref([]);
let loading = ref(false);

const editVaga = (id) => {
  console.log(id);
  router.push(`/edit/${id}`);
};

const fetchVagas = async () => {
  try {
    loading.value = true;
    let { data: vagas, error } = await supabase
      .from('vagas')
      .select('*')
      .range(0, 9);

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
