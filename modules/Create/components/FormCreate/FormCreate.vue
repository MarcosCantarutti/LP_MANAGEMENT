<template>
  <div v-if="loading" class="flex itens-center">
    <ProgressSpinner />
  </div>
  <form v-else class="max-w-7xl mx-auto" @submit.prevent="submitForm">
    <div class="mb-4">
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
        label="Voltar"
        icon="pi pi-arrow-left"
        icon-pos="left"
        @click="handleBack"
      />
      <Button
        type="submit"
        label="Enviar"
        icon="pi pi-send"
        icon-pos="right"
        severity="success"
      />
    </div>
  </form>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
let loading = ref(false);
const formData = ref({
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

const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const toast = useToast();

const supabase = createClient(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

const handleBack = () => {
  router.push('/profile');
};

const submitForm = async () => {
  try {
    loading.value = true;
    const { data, error } = await supabase
      .from('vagas')
      .insert([
        {
          city: formData.value.city,
          company: formData.value.company,
          title: formData.value.title,
          contract_type: formData.value.contract_type,
          responsibilities: formData.value.responsibilities,
          requiriments: formData.value.requiriments,
          more_information: formData.value.more_information,
          benefits: formData.value.benefits,
          modality: formData.value.modality,
        },
      ])
      .select();

    if (error) {
      console.error('Erro ao enviar o formulário:', error.message);
    } else {
      toast.add({
        severity: 'success',
        summary: 'Vaga criada com sucesso',
        life: 3000,
      });
      // Limpar os campos do formulário após o envio bem-sucedido
      formData.value.city = '';
      formData.value.company = '';
      formData.value.title = '';
      formData.value.contract_type = '';
      formData.value.responsibilities = '';
      formData.value.requiriments = '';
      formData.value.more_information = '';
      formData.value.benefits = '';
      formData.value.modality = '';
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  } finally {
    loading.value = false;
  }
};
</script>
