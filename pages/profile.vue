<script setup>
import Profile from '@/modules/Profile/Profile.vue';
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
  <Profile :email="email" @logout="logout" />
</template>
