import supabase from '@/plugins/supabase/supabase';

export async function logout() {
  const client = useSupabaseClient();
  // const router = useRouter();

  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    return '/login';
    // router.push('/login');
  } catch (error) {
    console.log(error.message);
  }
}

export async function login() {
  const client = useSupabaseClient();
  // const router = useRouter();

  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    return '/profile';
    // router.push('/profile');
  } catch (error) {
    errorMsg.value = error.message;
  }
}

export async function createVacancy(formData) {
  return await supabase.from('vagas').insert([formData]).select();
}

export async function fetchVacancyById(id) {
  return await supabase.from('vagas').select('*').eq('id', id);
}

export async function updateVacancy(formData, id) {
  return await supabase.from('vagas').update(formData).eq('id', id).select();
}

export async function deleteVacancy(id) {
  return await supabase.from('vagas').delete().eq('id', id);
}

export async function toggleVacancyStatus(id, isActive) {
  const { data, error } = await supabase
    .from('vagas')
    .update({ active: !isActive })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Erro ao carregar listagem', error.message);
    return { error };
  } else {
    return { data };
  }
}

export async function fetchVacancy(page, searchTerm, itemsPerPage) {
  try {
    const offset = (page - 1) * itemsPerPage;
    const { data, error } = await supabase
      .from('vagas')
      .select('*')
      .ilike('title', `%${searchTerm}%`) // Filtrar por título
      .range(offset, offset + itemsPerPage - 1);

    if (error) {
      console.error('Erro ao carregar listagem', error.message);
      return { error };
    } else {
      return { data };
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
}
