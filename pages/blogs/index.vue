<template>
  <div>
    <!-- Hero Section with Stats -->
    <BlogsHeroSection />
    <!-- Blog List Section -->
    <BlogListSection />
  </div>
</template>

<script setup>
useHead({
  title: "Blog Ảo Thuật & Lập Trình | Trần Sâm - Chia Sẻ Kiến Thức Chuyên Sâu",
  meta: [
    {
      name: "description",
      content: "Khám phá thế giới ảo thuật và lập trình qua các bài viết chuyên sâu. Kỹ thuật ảo thuật, lịch sử, tâm lý học, hướng dẫn lập trình web. Chia sẻ kinh nghiệm từ ảo thuật gia và lập trình viên chuyên nghiệp."
    },
    {
      name: "keywords",
      content: "blog ảo thuật, blog lập trình, kỹ thuật ảo thuật, hướng dẫn ảo thuật, lịch sử ảo thuật, tâm lý học ảo thuật, lập trình web, frontend, backend, React, Vue.js, Trần Sâm"
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Trần Sâm" },
    { property: "og:title", content: "Blog Ảo Thuật & Lập Trình | Trần Sâm" },
    { property: "og:description", content: "Chia sẻ kiến thức chuyên sâu về ảo thuật và lập trình" },
    { property: "og:type", content: "blog" },
    { property: "og:url", content: "https://transam.dev/blogs" },
    { property: "og:image", content: "https://transam.dev/images/blog-1.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Blog Ảo Thuật & Lập Trình" },
    { name: "twitter:description", content: "Chia sẻ kiến thức chuyên sâu về ảo thuật và lập trình" }
  ],
  link: [
    { rel: "canonical", href: "https://transam.dev/blogs" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog Ảo Thuật & Lập Trình",
        "description": "Chia sẻ kiến thức chuyên sâu về ảo thuật và lập trình",
        "url": "https://transam.dev/blogs",
        "author": {
          "@type": "Person",
          "name": "Trần Sâm",
          "jobTitle": "Lập Trình Viên & Ảo Thuật Gia"
        },
        "publisher": {
          "@type": "Person",
          "name": "Trần Sâm"
        },
        "inLanguage": "vi",
        "about": [
          {
            "@type": "Thing",
            "name": "Ảo Thuật",
            "description": "Nghệ thuật biểu diễn ảo thuật"
          },
          {
            "@type": "Thing", 
            "name": "Lập Trình",
            "description": "Phát triển phần mềm và ứng dụng web"
          }
        ]
      })
    }
  ]
});
</script>
