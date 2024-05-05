<script setup>
import Create from '@/modules/Create/Create.vue';
import { logout } from '@/composables/useService/useService';
const user = useSupabaseUser();
const email = ref('');
const router = useRouter();

async function handleLogout() {
  const logoutRoute = await logout();

  if (logoutRoute) {
    router.push(logoutRoute);
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
  <Create :email="email" @logout="handleLogout" />
</template>
