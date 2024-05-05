<script setup lang="ts">
import { login } from '~/composables/useService/useService';
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const router = useRouter();

async function handleSignIn() {
  const loginRoute = await login();

  if (loginRoute) {
    router.push(loginRoute);
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Faça login na sua conta
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSignIn">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="bg-gray-500">
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Senha"
              v-model="password"
            />
          </div>
        </div>

        <!-- Exibição de mensagem de erro -->
        <div v-if="errorMsg" class="text-red-500 text-sm">{{ errorMsg }}</div>

        <!-- <div class="flex items-center justify-between">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </div> -->

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
