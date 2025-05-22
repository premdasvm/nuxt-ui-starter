// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  future: { compatibilityVersion: 4 },

  compatibilityDate: "2025-01-15",

  modules: ["@nuxt/ui", "@nuxt/eslint", "@vueuse/nuxt"],

  css: ["~/assets/css/main.css"],

  eslint: {
    config: {
      standalone: false,
    },
  },

});
