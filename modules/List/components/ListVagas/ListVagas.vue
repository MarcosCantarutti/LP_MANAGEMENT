<template>
  <div class="grid gap-3">
    <Card
      class="cursor-pointer"
      v-for="vaga in listData"
      @click="editVaga(vaga.id)"
      :key="vaga.id"
      :job="vaga.job"
      :title="vaga.title"
      :company="vaga.company"
      :description="vaga.description"
    />
  </div>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js';
import Card from '@/modules/list/components/Card/Card.vue';
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const supabase = createClient(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

const listData = ref([]);

const editVaga = (id) => {
  console.log(id);
  router.push(`/edit/${id}`);
};

const fetchVagas = async () => {
  try {
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
  }
};

onMounted(() => {
  fetchVagas();
});
</script>
