<template>
  <div>
    <!-- Hero Section with Stats -->
    <ContactHeroSection />
    <!-- Contact Section (reuse from home) -->
    <ContactSection />
  </div>
</template>

<script setup>
useHead({
  title: "Liên Hệ Trần Sâm - Dịch Vụ Lập Trình Web & Ảo Thuật | 0868354016",
  meta: [
    {
      name: "description",
      content: "Liên hệ Trần Sâm để được tư vấn dịch vụ lập trình web (Frontend, Backend, Full Stack) và ảo thuật (Close-up, Sân khấu, Workshop). Hotline: 0868354016, Email: transamdhkh@gmail.com"
    },
    {
      name: "keywords",
      content: "liên hệ Trần Sâm, dịch vụ lập trình web, dịch vụ ảo thuật, frontend development, backend development, full stack, ảo thuật gần, ảo thuật sân khấu, workshop ảo thuật, 0868354016, Hà Nội"
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Trần Sâm" },
    { property: "og:title", content: "Liên Hệ Trần Sâm - Dịch Vụ Lập Trình & Ảo Thuật" },
    { property: "og:description", content: "Tư vấn dịch vụ lập trình web và ảo thuật chuyên nghiệp" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://transam.dev/contact" },
    { property: "og:image", content: "https://transam.dev/images/ab-1.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Liên Hệ Trần Sâm" },
    { name: "twitter:description", content: "Dịch vụ lập trình web và ảo thuật chuyên nghiệp" }
  ],
  link: [
    { rel: "canonical", href: "https://transam.dev/contact" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Liên Hệ Trần Sâm",
        "description": "Trang liên hệ để tư vấn dịch vụ lập trình web và ảo thuật",
        "url": "https://transam.dev/contact",
        "mainEntity": {
          "@type": "Person",
          "name": "Trần Sâm",
          "jobTitle": "Lập Trình Viên & Ảo Thuật Gia",
          "telephone": "+840868354016",
          "email": "transamdhkh@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cầu Giấy",
            "addressRegion": "Hà Nội",
            "addressCountry": "VN"
          }
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Dịch Vụ Lập Trình Web",
            "description": "Frontend, Backend, Full Stack Development"
          },
          {
            "@type": "Offer",
            "name": "Dịch Vụ Ảo Thuật", 
            "description": "Ảo thuật gần, sân khấu, workshop"
          }
        ]
      })
    }
  ]
});
</script>
