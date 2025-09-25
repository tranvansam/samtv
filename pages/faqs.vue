<template>
  <div>
    <!-- Hero Section with Stats -->
    <FaqsHeroSection />
    <!-- FAQ Section -->
    <FaqsSection />
  </div>
</template>

<script setup>
useHead({
  title: "Câu Hỏi Thường Gặp | FAQ - Dịch Vụ Lập Trình Web & Ảo Thuật | Trần Sâm",
  meta: [
    {
      name: "description",
      content: "Tìm hiểu thông tin chi tiết về dịch vụ lập trình web và ảo thuật của Trần Sâm. Câu hỏi thường gặp về Frontend, Backend, Full Stack Development và các dịch vụ ảo thuật (Close-up, Sân khấu, Workshop)."
    },
    {
      name: "keywords",
      content: "FAQ, câu hỏi thường gặp, dịch vụ lập trình web, dịch vụ ảo thuật, frontend development, backend development, full stack, ảo thuật gần, ảo thuật sân khấu, workshop ảo thuật, Trần Sâm, Hà Nội"
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Trần Sâm" },
    { property: "og:title", content: "FAQ - Dịch Vụ Lập Trình Web & Ảo Thuật | Trần Sâm" },
    { property: "og:description", content: "Câu hỏi thường gặp về dịch vụ lập trình web và ảo thuật" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://transam.dev/faqs" },
    { property: "og:image", content: "https://transam.dev/images/ab-1.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "FAQ - Dịch Vụ Lập Trình & Ảo Thuật" },
    { name: "twitter:description", content: "Câu hỏi thường gặp về dịch vụ chuyên nghiệp" }
  ],
  link: [
    { rel: "canonical", href: "https://transam.dev/faqs" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "Câu Hỏi Thường Gặp - Dịch Vụ Lập Trình Web & Ảo Thuật",
        "description": "Tìm hiểu thông tin chi tiết về dịch vụ lập trình web và ảo thuật",
        "url": "https://transam.dev/faqs",
        "author": {
          "@type": "Person",
          "name": "Trần Sâm",
          "jobTitle": "Lập Trình Viên & Ảo Thuật Gia"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dịch vụ lập trình web nào được cung cấp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chúng tôi cung cấp dịch vụ Frontend Development, Backend Development và Full Stack Development"
            }
          },
          {
            "@type": "Question", 
            "name": "Các loại dịch vụ ảo thuật có sẵn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chúng tôi cung cấp ảo thuật gần (Close-up), ảo thuật sân khấu (Stage) và workshop ảo thuật"
            }
          }
        ],
        "inLanguage": "vi"
      })
    }
  ]
});
</script>
