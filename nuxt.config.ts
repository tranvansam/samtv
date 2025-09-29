// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  // Enable SSR for better SEO
  ssr: true,

  css: ["~/assets/scss/main.scss", "swiper/css"],
  modules: ["@nuxtjs/tailwindcss", "@vee-validate/nuxt", "@nuxt/image"],

  // Auto import Vue composables and composables from composables directory
  imports: {
    autoImport: true,
    dirs: ["composables/**"],
  },

  // Auto import components
  components: [{ path: "~/components", pathPrefix: false }],

  // Image optimization configuration
  // @ts-ignore
  image: {
    provider: "ipx",
  },

  // Vite configuration for better auto import
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  // SEO optimization
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        process.env.SITE_TITLE ||
        "Leadsmax Network - Empowering Affiliate Journey",
      meta: [
        {
          name: "description",
          content:
            process.env.SITE_DESCRIPTION ||
            "Leadsmax Network specializes in affiliate marketing, connecting consumers with brands and helping advertisers and publishers achieve their goals.",
        },
        { name: "robots", content: "index, follow" },
        {
          name: "author",
          content: process.env.SITE_AUTHOR || "Leadsmax Network",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: process.env.SITE_NAME || "Leadsmax Network",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: process.env.SITE_URL || "https://leadsmax.network",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // API URL
      NUXT_PUBLIC_API_URL:
        process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000",

      // Authentication URLs
      PUBLISHER_SIGNUP_URL:
        process.env.PUBLISHER_SIGNUP_URL ||
        "https://leadsmaxgroup.affise.com/v2/sign/up",
      LOGIN_URL:
        process.env.LOGIN_URL || "https://leadsmaxgroup.affise.com/v2/sign/in",

      // Site SEO Configuration
      SITE_URL: process.env.SITE_URL || "https://leadsmax.network",
      SITE_TITLE:
        process.env.SITE_TITLE ||
        "Leadsmax Network - Empowering Affiliate Journey",
      SITE_DESCRIPTION:
        process.env.SITE_DESCRIPTION ||
        "Leadsmax Network specializes in affiliate marketing, connecting consumers with brands and helping advertisers and publishers achieve their goals.",
      SITE_KEYWORDS:
        process.env.SITE_KEYWORDS ||
        "affiliate marketing, leads management, digital marketing, publishers, advertisers, performance marketing, Vietnam, CPA, CPL, lead generation",
      SITE_NAME: process.env.SITE_NAME || "Leadsmax Network",
      SITE_AUTHOR: process.env.SITE_AUTHOR || "Leadsmax Network",
      SITE_LOCALE: process.env.SITE_LOCALE || "en_US",

      // Social Media URLs
      SITE_FACEBOOK:
        process.env.SITE_FACEBOOK || "https://facebook.com/leadsmax",
      SITE_TWITTER: process.env.SITE_TWITTER || "https://twitter.com/leadsmax",
      SITE_LINKEDIN:
        process.env.SITE_LINKEDIN || "https://linkedin.com/company/leadsmax",
      SITE_TWITTER_SITE: process.env.SITE_TWITTER_SITE || "@leadsmax",
      SITE_TWITTER_CREATOR: process.env.SITE_TWITTER_CREATOR || "@leadsmax",

      // Images
      SITE_OG_IMAGE:
        process.env.SITE_OG_IMAGE || "https://leadsmax.network/og-image.jpg",
      SITE_TWITTER_IMAGE:
        process.env.SITE_TWITTER_IMAGE ||
        "https://leadsmax.network/twitter-image.jpg",
      SITE_LOGO: process.env.SITE_LOGO || "https://leadsmax.network/logo.png",

      // Contact Information
      SITE_PHONE: process.env.SITE_PHONE || "+84 372 571 498",
      SITE_AREA_SERVED: process.env.SITE_AREA_SERVED || "VN",
      SITE_LANGUAGES: process.env.SITE_LANGUAGES || "English,Vietnamese",
    },
  },
});
