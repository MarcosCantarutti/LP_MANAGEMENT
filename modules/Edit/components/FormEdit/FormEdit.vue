<template>
  <form class="max-w-7xl mx-auto" @submit.prevent="saveForm">
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
        label="Salvar"
        icon="pi pi-send"
        icon-pos="right"
        severity="success"
      />
      <Button
        label="Deletar"
        icon="pi pi-trash"
        severity="danger"
        icon-pos="left"
        @click="deleteVaga"
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
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const toast = useToast();

const supabase = createClient(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

const fetchVagasById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('vagas')
      .select('*')
      .eq('id', id);

    if (error) {
      console.error('Erro ao carregar os dados do formulário: ', error.message);
    } else {
      console.log(data[0]);
      // Limpar os campos do formulário após o envio bem-sucedido
      formData.value.job = data[0].job;
      formData.value.company = data[0].company;
      formData.value.title = data[0].title;
      formData.value.description = data[0].description;
      formData.value.responsibilities = data[0].responsibilities;
      formData.value.requiriments = data[0].requiriments;
      formData.value.more_information = data[0].more_information;
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }
};

const saveForm = async () => {
  try {
    const { data, error } = await supabase
      .from('vagas')
      .update([
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
      .eq('id', route.params.id)
      .select();

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
    console.error('Erro ao enviar o formulário:', error);
  }
};

const deleteVaga = async () => {
  try {
    const { error } = await supabase
      .from('vagas')
      .delete()
      .eq('id', route.params.id);
    if (error) {
      console.error('Erro ao deletar o formulário: ', error.message);
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
};

onMounted(() => {
  fetchVagasById(route.params.id);
});
</script>
