<template>
  <div>
    <div class="h-[80px] bg-black"></div>
    <div class="min-h-screen mt-2 bg-white">
      <!-- Blog Detail Content -->
      <article
        v-if="blog"
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <!-- Breadcrumb -->
        <nav class="mb-8" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-sm text-gray-500">
            <li><NuxtLink to="/" class="hover:text-orange-500">Trang Chủ</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg></li>
            <li><NuxtLink to="/blogs" class="hover:text-orange-500">Blog</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg></li>
            <li><span>{{ blog.title }}</span></li>
          </ol>
        </nav>

        <!-- Article Header -->
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ blog.title }}</h1>

            <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
              <span class="text-gray-500 mr-2">Ngày đăng:</span>
              <time class="text-gray-900">{{ blog.date }}</time>
              </div>
              <div class="flex items-center">
              <span class="text-gray-500 mr-2">Tác giả:</span>
              <img :src="blog.author.avatar" :alt="blog.author.name" class="w-6 h-6 rounded-full mr-2"/>
              <span class="text-gray-900">{{ blog.author.name }}</span>
              </div>
              <div class="flex items-center">
              <span class="text-gray-500 mr-2">Chuyên mục:</span>
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">{{ blog.category }}</span>
            </div>
          </div>

          <!-- Featured Image -->
          <figure class="relative mb-8">
            <img :src="blog.thumbnail" :alt="`Hình ảnh cho: ${blog.title}`" class="w-full h-96 object-cover rounded-lg"/>
          </figure>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none mb-8" v-html="blog.content"></div>

          <!-- Footer -->
        <footer class="border-t pt-8">
          <div class="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div>
              <span>Cập nhật lần cuối: </span>
              <time>{{ blog.date }}</time>
            </div>
            <div>
              <NuxtLink to="/blogs" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Quay lại Blog
              </NuxtLink>
            </div>
            </div>
          </footer>
      </article>

      <!-- Not Found -->
      <div v-else class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
          <p class="text-gray-600 mb-8">Bài viết bạn đang tìm kiếm không tồn tại.</p>
          <NuxtLink to="/blogs" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
            Quay lại Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Get route params
const route = useRoute()
const blogId = computed(() => route.params.id)

// Static blog data
const blogData = {
  1: {
    id: 1,
    title: "Ảo Thuật Là Gì? Khám Phá Thế Giới Kỳ Diệu Của Nghệ Thuật Ảo Thuật",
    category: "Ảo Thuật Cơ Bản",
    date: "15 Tháng 12, 2024",
    thumbnail: "/images/blog-1.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Ảo Thuật Là Gì?</h2><p>Ảo thuật là nghệ thuật tạo ra những điều kỳ diệu, bất ngờ và không thể giải thích được bằng logic thông thường...</p><h3>Định nghĩa Ảo thuật</h3><p>Ảo thuật (Magic) là nghệ thuật tạo ra ảo giác, làm cho khán giả tin rằng những điều không thể xảy ra đang diễn ra trước mắt họ.</p>`
  },
  2: {
    id: 2,
    title: "Lịch Sử Ảo Thuật: Từ Cổ Đại Đến Hiện Đại",
    category: "Lịch Sử",
    date: "10 Tháng 12, 2024",
    thumbnail: "/images/blog-2.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Lịch Sử Phát Triển Của Ảo Thuật</h2><p>Ảo thuật có lịch sử lâu đời, bắt đầu từ những nghi lễ tôn giáo và pháp thuật cổ đại...</p>`
  },
  3: {
    id: 3,
    title: "Các Loại Ảo Thuật Phổ Biến: Close-up, Stage, Mentalism",
    category: "Kỹ Thuật",
    date: "5 Tháng 12, 2024",
    thumbnail: "/images/blog-3.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Các Loại Ảo Thuật Chính</h2><p>Ảo thuật được chia thành nhiều loại khác nhau, mỗi loại có đặc điểm, kỹ thuật và môi trường biểu diễn riêng...</p>`
  },
  4: {
    id: 4,
    title: "Học Ảo Thuật Từ Cơ Bản: Hướng Dẫn Cho Người Mới Bắt Đầu",
    category: "Hướng Dẫn",
    date: "1 Tháng 12, 2024",
    thumbnail: "/images/blog-4.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Hướng Dẫn Học Ảo Thuật Cho Người Mới</h2><p>Học ảo thuật là một hành trình thú vị và đầy thử thách...</p>`
  },
  5: {
    id: 5,
    title: "Tâm Lý Học Trong Ảo Thuật: Cách Đọc Suy Nghĩ Khán Giả",
    category: "Tâm Lý Học",
    date: "25 Tháng 11, 2024",
    thumbnail: "/images/blog-1.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Tâm Lý Học Trong Ảo Thuật</h2><p>Ảo thuật không chỉ dựa vào kỹ thuật mà còn dựa vào sự hiểu biết sâu sắc về tâm lý con người...</p>`
  },
  6: {
    id: 6,
    title: "Ảo Thuật Bài: Nghệ Thuật Của Những Lá Bài",
    category: "Ảo Thuật Bài",
    date: "20 Tháng 11, 2024",
    thumbnail: "/images/blog-2.webp",
    author: { name: "Trần Sâm", avatar: "/images/ab-1.webp" },
    content: `<h2>Ảo Thuật Bài - Nghệ Thuật Của Những Lá Bài</h2><p>Ảo thuật bài là một trong những loại ảo thuật phổ biến và dễ tiếp cận nhất...</p>`
  }
}

// Get blog by ID
const blog = computed(() => {
  const id = parseInt(blogId.value)
  return blogData[id] || null
})

// SEO Meta Tags with comprehensive optimization
useHead(() => {
  if (!blog.value) {
    return {
      title: "Không tìm thấy bài viết - Trần Sâm",
      meta: [
        { name: "description", content: "Bài viết bạn đang tìm kiếm không tồn tại." },
        { name: "robots", content: "noindex, nofollow" }
      ]
    }
  }
  
  const blogTitle = blog.value.title
  const blogDescription = blog.value.content?.replace(/<[^>]*>/g, '').substring(0, 160) || blog.value.title
  const blogKeywords = `ảo thuật, magic, blog, ${blog.value.category}, Trần Sâm, ảo thuật gia, lập trình, ${blog.value.title.toLowerCase()}`
  
  return {
    title: `${blogTitle} | Blog Ảo Thuật & Lập Trình - Trần Sâm`,
    meta: [
      { name: "description", content: blogDescription },
      { name: "keywords", content: blogKeywords },
      { name: "author", content: blog.value.author.name },
      { name: "robots", content: "index, follow" },
      { name: "article:author", content: blog.value.author.name },
      { name: "article:published_time", content: blog.value.date },
      { name: "article:section", content: blog.value.category },
      { property: "og:title", content: blogTitle },
      { property: "og:description", content: blogDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://transam.dev/blogs/${blog.value.id}` },
      { property: "og:image", content: `https://transam.dev${blog.value.thumbnail}` },
      { property: "og:site_name", content: "Trần Sâm - Blog Ảo Thuật & Lập Trình" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: blogTitle },
      { name: "twitter:description", content: blogDescription },
      { name: "twitter:image", content: `https://transam.dev${blog.value.thumbnail}` }
    ],
    link: [
      { rel: "canonical", href: `https://transam.dev/blogs/${blog.value.id}` }
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogTitle,
          "description": blogDescription,
          "image": `https://transam.dev${blog.value.thumbnail}`,
          "url": `https://transam.dev/blogs/${blog.value.id}`,
          "datePublished": blog.value.date,
          "dateModified": blog.value.date,
          "author": {
            "@type": "Person",
            "name": blog.value.author.name,
            "url": "https://transam.dev"
          },
          "publisher": {
            "@type": "Person",
            "name": "Trần Sâm",
            "url": "https://transam.dev"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://transam.dev/blogs/${blog.value.id}`
          },
          "articleSection": blog.value.category,
          "inLanguage": "vi"
        })
      }
    ]
  }
})
</script>

<style scoped>
.prose {
  color: #374151;
  line-height: 1.75;
}
.prose h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.prose h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
.prose p {
  margin-bottom: 1rem;
  color: #4b5563;
}
.prose strong {
  font-weight: 600;
  color: #1f2937;
}
</style>
