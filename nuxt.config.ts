// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8080
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'nuxt-primevue',
  ],

  imports: {
    dirs: ['./composables/useService'],
  },

  supabase: {
    redirect: false
  },
  css: ['primeicons/primeicons.css'],

  primevue: {
    options: { unstyled: true },
    importPT: {
      as: "lara",
      from: "@/assets/presets/lara/"
    },
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },


})
