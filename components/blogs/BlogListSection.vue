<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="blog in blogs"
          :key="blog.id"
          :to="`/blogs/${blog.id}`"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer block"
        >
          <!-- Blog Image -->
          <div class="relative overflow-hidden h-48">
            <img
              :src="blog.thumbnail"
              :alt="blog.title"
              decoding="async"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                {{ blog.category }}
              </span>
            </div>
          </div>

          <!-- Blog Content -->
          <div class="p-6">
            <!-- Date -->
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {{ blog.date }}
            </div>

            <!-- Title -->
            <h3
              class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300 h-[55px]"
            >
              {{ blog.title }}
            </h3>

            <!-- Excerpt -->
            <div
              class="text-gray-600 mb-4 line-clamp-3 h-[63px]"
            >
              {{ blog.excerpt }}
            </div>

            <!-- Author -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  :src="blog.author.avatar"
                  :alt="blog.author.name"
                  decoding="async"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p class="text-sm font-semibold text-gray-900">
                    {{ blog.author.name }}
                  </p>
                  <p class="text-xs text-gray-500">Tác giả</p>
                </div>
              </div>

              <!-- Read More Button -->
              <button
                class="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                Đọc thêm
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Static blog data about magic
const blogs = ref([
  {
    id: 1,
    title: "Ảo Thuật Là Gì? Khám Phá Thế Giới Kỳ Diệu Của Nghệ Thuật Ảo Thuật",
    excerpt: "Ảo thuật là nghệ thuật tạo ra những điều kỳ diệu, bất ngờ và không thể giải thích được. Hãy cùng khám phá thế giới đầy bí ẩn này...",
    category: "Ảo Thuật Cơ Bản",
    date: "15 Tháng 12, 2024",
    thumbnail: "/images/blog-1.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  },
  {
    id: 2,
    title: "Lịch Sử Ảo Thuật: Từ Cổ Đại Đến Hiện Đại",
    excerpt: "Ảo thuật đã tồn tại hàng nghìn năm, từ những pháp sư cổ đại đến các ảo thuật gia hiện đại. Cùng tìm hiểu hành trình phát triển...",
    category: "Lịch Sử",
    date: "10 Tháng 12, 2024",
    thumbnail: "/images/blog-2.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  },
  {
    id: 3,
    title: "Các Loại Ảo Thuật Phổ Biến: Close-up, Stage, Mentalism",
    excerpt: "Khám phá các loại ảo thuật khác nhau từ ảo thuật gần, sân khấu đến mentalism. Mỗi loại có đặc điểm và kỹ thuật riêng...",
    category: "Kỹ Thuật",
    date: "5 Tháng 12, 2024",
    thumbnail: "/images/blog-3.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  },
  {
    id: 4,
    title: "Học Ảo Thuật Từ Cơ Bản: Hướng Dẫn Cho Người Mới Bắt Đầu",
    excerpt: "Bạn muốn học ảo thuật nhưng không biết bắt đầu từ đâu? Hướng dẫn chi tiết từ những bước đầu tiên đến các kỹ thuật nâng cao...",
    category: "Hướng Dẫn",
    date: "1 Tháng 12, 2024",
    thumbnail: "/images/blog-4.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  },
  {
    id: 5,
    title: "Tâm Lý Học Trong Ảo Thuật: Cách Đọc Suy Nghĩ Khán Giả",
    excerpt: "Ảo thuật không chỉ là kỹ thuật mà còn là nghệ thuật hiểu tâm lý con người. Khám phá cách ảo thuật gia đọc được suy nghĩ...",
    category: "Tâm Lý Học",
    date: "25 Tháng 11, 2024",
    thumbnail: "/images/blog-1.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  },
  {
    id: 6,
    title: "Ảo Thuật Bài: Nghệ Thuật Của Những Lá Bài",
    excerpt: "Ảo thuật bài là một trong những loại ảo thuật phổ biến nhất. Từ những trick đơn giản đến các kỹ thuật phức tạp...",
    category: "Ảo Thuật Bài",
    date: "20 Tháng 11, 2024",
    thumbnail: "/images/blog-2.webp",
    author: {
      name: "Trần Sâm",
      avatar: "/images/ab-1.webp"
    }
  }
]);
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:text-orange-500 {
  color: #f97316;
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Quill editor content styling */
.prose {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

.prose p {
  margin: 0;
  padding: 0;
}

.prose strong {
  font-weight: 600;
  color: #374151;
}

.prose em {
  font-style: italic;
}

.prose ul,
.prose ol {
  margin: 0;
  padding-left: 1rem;
}

.prose li {
  margin: 0.25rem 0;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  margin: 0;
  font-weight: 600;
  color: #374151;
}

.prose blockquote {
  margin: 0;
  padding-left: 0.75rem;
  border-left: 3px solid #f97316;
  font-style: italic;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  color: #374151;
}

.prose pre {
  background-color: #f3f4f6;
  padding: 0.5rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  margin: 0;
}

.prose a {
  color: #f97316;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}
</style>
