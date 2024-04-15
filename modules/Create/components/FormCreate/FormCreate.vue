<template>
  <form class="max-w-7xl mx-auto" @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="company" class="block text-gray-700">Empresa</label>
      <input
        v-model="formData.company"
        type="text"
        id="company"
        name="company"
        class="form-input mt-1 block w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="job" class="block text-gray-700">Trabalho</label>
      <input
        v-model="formData.job"
        type="text"
        id="job"
        name="job"
        class="form-input mt-1 block w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="title" class="block text-gray-700">Título</label>
      <input
        v-model="formData.title"
        type="text"
        id="title"
        name="title"
        class="form-input mt-1 block w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-gray-700">Descrição</label>
      <textarea
        v-model="formData.description"
        id="description"
        name="description"
        rows="3"
        class="form-textarea mt-1 block w-full"
        required
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="description" class="block text-gray-700"
        >Responsabilidades</label
      >
      <textarea
        v-model="formData.responsibilities"
        id="description"
        name="description"
        rows="3"
        class="form-textarea mt-1 block w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-gray-700">Requisitos</label>
      <textarea
        v-model="formData.requiriments"
        id="description"
        name="description"
        rows="3"
        class="form-textarea mt-1 block w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-gray-700"
        >Mais informações</label
      >
      <textarea
        v-model="formData.more_information"
        id="description"
        name="description"
        rows="3"
        class="form-textarea mt-1 block w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4 flex gap-2">
      <Button
        type="submit"
        label="Enviar"
        icon="pi pi-send"
        icon-pos="right"
        severity="success"
      />
      <Button
        label="Voltar"
        icon="pi pi-arrow-left"
        icon-pos="left"
        @click="handleBack"
      />
    </div>
  </form>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';

const formData = ref({
  job: '',
  company: '',
  title: '',
  description: '',
  responsibilities: '',
  requiriments: '',
  more_information: '',
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
    const { data, error } = await supabase
      .from('vagas')
      .insert([
        {
          job: formData.value.job,
          company: formData.value.company,
          title: formData.value.title,
          description: formData.value.description,
          responsibilities: formData.value.responsibilities,
          requiriments: formData.value.requiriments,
          more_information: formData.value.more_information,
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
      formData.value.job = '';
      formData.value.company = '';
      formData.value.title = '';
      formData.value.description = '';
      formData.value.responsibilities = '';
      formData.value.requiriments = '';
      formData.value.more_information = '';
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }
};
</script>
