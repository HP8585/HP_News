import { Link } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  devtools: { enabled: true },
  postcss: {
    
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    
  },
  app:{
    head:{
      link:[
        {rel:'stylesheet', href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}
      ]
    }
  }
})
