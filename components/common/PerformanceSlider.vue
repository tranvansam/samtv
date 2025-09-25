<template>
  <div class="performance-slider">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :navigation="true"
      class="performance-swiper"
    >
      <swiper-slide v-for="(performance, index) in performances" :key="index">
        <div class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
          <div class="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center relative">
            <!-- Placeholder for actual image/video -->
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                <p class="text-white font-semibold">{{ performance.title }}</p>
                <p class="text-gray-400 text-sm">{{ performance.description }}</p>
                <p class="text-gray-500 text-xs mt-2">📸 Thêm ảnh/video thật vào đây</p>
              </div>
            </div>
            <!-- Overlay for video button -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                @click="openVideo(performance)"
                class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                ▶️ Xem Video
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Swiper modules
const modules = [Autoplay, Pagination, Navigation]

// Performance data
const performances = [
  {
    id: 1,
    title: 'Close-up Magic',
    description: 'Tương tác trực tiếp',
    color: 'orange',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z'
  },
  {
    id: 2,
    title: 'Stage Magic',
    description: 'Biểu diễn sân khấu',
    color: 'blue',
    icon: 'M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    id: 3,
    title: 'Mentalism',
    description: 'Đọc suy nghĩ',
    color: 'purple',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    id: 4,
    title: 'Corporate Event',
    description: 'Sự kiện doanh nghiệp',
    color: 'green',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
  },
  {
    id: 5,
    title: 'Card Tricks',
    description: 'Ảo thuật bài',
    color: 'yellow',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    id: 6,
    title: 'Coin Magic',
    description: 'Ảo thuật xu',
    color: 'red',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

// Handle video opening
const openVideo = (performance) => {
  // You can implement video modal or redirect to video page
  console.log('Opening video for:', performance.title)
  // Example: window.open(performance.videoUrl, '_blank')
}
</script>

<style scoped>
.performance-slider {
  @apply w-full;
}

.performance-swiper {
  @apply w-full;
}

/* Custom Swiper styles */
:deep(.swiper-pagination-bullet) {
  @apply bg-white/50;
}

:deep(.swiper-pagination-bullet-active) {
  @apply bg-orange-500;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  @apply text-white;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  @apply text-2xl;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  @apply text-orange-500;
}
</style>
