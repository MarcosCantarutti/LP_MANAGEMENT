<script setup>
import Edit from '@/modules/Edit/Edit.vue';
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const email = ref('');

async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push('/login');
  } catch (error) {
    console.log(error.message);
  }
}

definePageMeta({
  middleware: ['auth'],
});

watchEffect(() => {
  if (!user.value) {
    return;
  }
  email.value = user.value.email;
});
</script>

<template>
  <Edit :email="email" @logout="logout" />
</template>
