<template>
  <!-- {{ formData.created_at }} -->
  <div v-if="loading" class="flex itens-center">
    <ProgressSpinner />
  </div>

  <form v-else class="max-w-7xl mx-auto" @submit.prevent="saveForm">
    <div class="mb-4">
      <div class="mb-4">
        <p class="block">Status da vaga:
          <span v-if="isActive" class="text-green-700 ml-1">Ativa</span>
          <span v-else class="text-red-700 ml-1">Inativa</span>
        </p>
      </div>
      <div class="mb-4">
        <label for="title" class="block text-gray-700">Título da vaga</label>
        <input
          v-model="formData.title"
          type="text"
          id="title"
          name="title"
          class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
          required
        />
      </div>
      <div class="mb-4">
      <label for="contract_type" class="block text-gray-700">Tipo de contrato</label>
      <input
        v-model="formData.contract_type"
        id="contract_type"
        name="contract_type"
        rows="3"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
        required
      ></input>
    </div>
      <div class="mb-4">
        <label for="modality" class="block text-gray-700">Modalidade</label>
        <input
          v-model="formData.modality"
          id="modality"
          name="modality"
          rows="3"
          class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
          required
        />
      </div>
      <label for="city" class="block text-gray-700">Cidade</label>
      <input
        v-model="formData.city"
        type="text"
        id="city"
        name="city"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="company" class="block text-gray-700"
        >Empresa (oculto para os usuários)</label
      >
      <input
        v-model="formData.company"
        type="text"
        id="company"
        name="company"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="benefits" class="block text-gray-700">Beneficios</label>
      <textarea
        v-model="formData.benefits"
        id="benefits"
        name="benefits"
        rows="3"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
        required
      ></textarea>
    </div>
   
    <div class="mb-4">
      <label for="responsibilities" class="block text-gray-700"
        >Responsabilidades</label
      >
      <textarea
        v-model="formData.responsibilities"
        id="responsibilities"
        name="responsibilities"
        rows="3"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="requiriments" class="block text-gray-700">Requisitos</label>
      <textarea
        v-model="formData.requiriments"
        id="requiriments"
        name="requiriments"
        rows="3"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="more_information" class="block text-gray-700"
        >Mais informações</label
      >
      <textarea
        v-model="formData.more_information"
        id="more_information"
        name="more_information"
        rows="3"
        class="font-sans leading-none m-0 p-3 rounded-md text-surface-600 dark:text-surface-200 placeholder:text-surface-400 dark:placeholder:text-surface-500 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10 appearance-none transition-colors duration-200 w-full"
      ></textarea>
    </div>

    <div class="mb-4 flex gap-2">
      <Button
        type="submit"
        label="Atualizar"
        icon="pi pi-send"
        icon-pos="right"
        severity="success"
      />
      <Button
        v-if="isActive"
        type="button"
        @click="disableActiveVaga"
        label="Desativar"
        icon="pi pi-minus"
        icon-pos="right"
        severity="warning"
      />
      <Button
        v-else="isActive"
        type="button"
        @click="disableActiveVaga"
        label="Ativar"
        icon="pi pi-plus"
        icon-pos="right"
        severity="warning"
      />
      <Button
        type="button"
        @click="deleteVaga"
        label="Deletar"
        icon="pi pi-trash"
        icon-pos="right"
        severity="danger"
      />
    </div>
  </form>
</template>

<script setup>
import { fetchVacancyById, updateVacancy, deleteVacancy, toggleVacancyStatus } from '~/composables/useService/useService'; // Importe o serviço

const formData = ref({
  created_at: '',
  city: '',
  company: '',
  title: '',
  contract_type: '',
  responsibilities: '',
  requiriments: '',
  more_information: '',
  benefits: '',
  modality: '',
});

let isActive = ref(false);
let loading = ref(false);

const router = useRouter();
const route = useRoute();
const toast = useToast();


const fetchVagasById = async () => {
  try {
    loading.value = true;
    const { data, error } = await fetchVacancyById(route.params.id);

    if (error) {
      console.error('Erro ao carregar os dados do formulário: ', error.message);
    } else {
      console.log(data[0]);
      // Limpar os campos do formulário após o envio bem-sucedido
      formData.value.city = data[0].city;
      formData.value.company = data[0].company;
      formData.value.title = data[0].title;
      formData.value.contract_type = data[0].contract_type;
      formData.value.responsibilities = data[0].responsibilities;
      formData.value.requiriments = data[0].requiriments;
      formData.value.more_information = data[0].more_information;
      formData.value.benefits = data[0].benefits;
      formData.value.modality = data[0].modality;
      formData.value.created_at = data[0].created_at;
      isActive.value = data[0].active;
    }
  } catch (error) {
    console.error('Erro ao carregar os dados do formulário:', error);
  } finally {
    loading.value = false;
  }
};

const saveForm = async () => {
  try {
    const { error } = await updateVacancy(formData.value, route.params.id);

    if (error) {
      console.error('Erro ao salvar o formulário:', error.message);
    } else {
      toast.add({
        severity: 'success',
        summary: 'Dados atualizados com sucesso!',
        life: 3000,
      });
    }
  } catch (error) {
    console.error('Erro ao salvar o formulário:', error);
  }
};

const deleteVaga = async () => {
  if (confirm('Deseja realmente excluir esta vaga?')) {
    try {
      const { error } = await deleteVacancy(route.params.id);
      if (error) {
        console.error('Erro ao deletar a vaga: ', error.message);
      } else {
        toast.add({
          severity: 'success',
          summary: 'Dados deletados com sucesso!',
          life: 3000,
        });

        router.push('/list');
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const disableActiveVaga = async () => {
  if (confirm('Deseja realmente alterar o status desta vaga?')) {
    try {
      const { data , error } = await toggleVacancyStatus(route.params.id, isActive.value);
      if (error) {
        console.error('Erro ao alterar o status:', error.message);
      } else {
        toast.add({
          severity: 'success',
          summary: 'Status da vaga alterada com sucesso!',
          life: 3000,
        });
        isActive.value = data[0].active;
      }
    } catch (error) {
      console.error('Erro ao alterar o status:', error);
    }finally{
      
      location.reload();
    }
  }
};


onMounted(() => {
  fetchVagasById(route.params.id);
});
</script>
