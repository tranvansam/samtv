<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[1200px]">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
               Quản Lý Sự Kiện
            </div>
            
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight break-words">
              🤖 Trái Tim Ứng Dụng - Trợ Lý AI Thông Minh
            </h2>
            
            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Công cụ đa năng với <strong class="text-orange-500">Trợ Lý AI</strong> nhắc nhở và lập kế hoạch chuẩn xác. 
              Quản lý sự kiện ăn uống, du lịch, họp mặt, sinh nhật, chi tiêu gia đình với tính minh bạch tuyệt đối.
            </p>
            
            <!-- Key Features -->
            <div class="space-y-6 mb-8">
              <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 shadow-sm border border-orange-200">
                <h3 class="font-semibold text-gray-900 text-lg mb-3 break-words leading-tight">🤖 Trợ Lý AI Thông Minh:</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <strong>Nhắc nhở tự động</strong> khi sắp đến sự kiện
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <strong>Lập kế hoạch chuẩn xác</strong> dựa trên lịch sử chi tiêu
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <strong>Gợi ý ngân sách</strong> phù hợp với từng loại sự kiện
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <strong>Dự đoán chi phí</strong> và cảnh báo vượt ngân sách
                  </li>
                </ul>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <h3 class="font-semibold text-gray-900 text-lg mb-3">Tất Cả Thành Viên Có Thể:</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Thêm thu chi
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Lập kế hoạch sự kiện
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Góp ý qua thảo luận/chat nhóm
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Thống kê kế hoạch so với chi tiêu thực tế
                  </li>
                </ul>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <h3 class="font-semibold text-gray-900 text-lg mb-3">Chia Tiền Linh Hoạt:</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Chia đều tổng chi phí
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Chia nhỏ theo từng khoản thu chi
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    Tùy chỉnh số tiền theo thực tế sử dụng
                  </li>
                </ul>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <h3 class="font-semibold text-gray-900 text-lg mb-3">✅ Xác Nhận Thanh Toán:</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Hệ thống hiển thị "đã chia tiền"
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Gửi yêu cầu thanh toán và xác nhận trực tiếp trong app
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <strong>Thanh toán tiện ích với VNPay</strong> - tích hợp thanh toán nhanh chóng và an toàn
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Images Swiper -->
          <div class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <!-- Custom Slider Container -->
              <div class="relative overflow-hidden rounded-xl">
                <!-- Slides Container -->
                <div class="relative h-[1100px]">
                  <div 
                    v-for="(slide, index) in slides" 
                    :key="index"
                    class="absolute inset-0 transition-all duration-500 ease-in-out"
                    :class="{
                      'opacity-100 translate-x-0': currentSlide === index,
                      'opacity-0 translate-x-full': currentSlide < index,
                      'opacity-0 -translate-x-full': currentSlide > index
                    }"
                  >
                    <div class="aspect-w-16 aspect-h-9">
                      <img 
                        :src="slide.src" 
                        :alt="slide.alt" 
                        class="w-full h-[1100px] object-cover rounded-xl"
                      />
                    </div>
                    <p class="text-sm text-gray-600 text-center mt-3">{{ slide.title }}</p>
                  </div>
                </div>
                
                <!-- Navigation buttons -->
                <button 
                  @click="nextSlide"
                  class="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer z-10 hover:scale-110"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
                <button 
                  @click="prevSlide"
                  class="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer z-10 hover:scale-110"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
                  </svg>
                </button>
                
                <!-- Pagination -->
                <div class="flex justify-center mt-6 space-x-3">
                  <button 
                    v-for="(slide, index) in slides" 
                    :key="index"
                    @click="goToSlide(index)"
                    class="w-4 h-4 rounded-full transition-all duration-300 hover:scale-125"
                    :class="{
                      'bg-gradient-to-r from-orange-500 to-orange-600 scale-125 shadow-lg': currentSlide === index,
                      'bg-gray-300 hover:bg-orange-300': currentSlide !== index
                    }"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = ref([
  {
    src: '/images/app/danhsachsukien.webp',
    alt: 'Danh sách sự kiện',
    title: 'Danh sách sự kiện'
  },
  {
    src: '/images/app/danhsachthuchi-chitietsukien.webp',
    alt: 'Chi tiết sự kiện',
    title: 'Chi tiết sự kiện'
  },
  {
    src: '/images/app/kehoach-chitietsukien.webp',
    alt: 'Kế hoạch sự kiện',
    title: 'Kế hoạch sự kiện'
  },
  {
    src: '/images/app/thaoluan-chitietsukien.webp',
    alt: 'Thảo luận nhóm',
    title: 'Thảo luận nhóm'
  },
  {
    src: '/images/app/thongke-chitietsukien.webp',
    alt: 'Thống kê sự kiện',
    title: 'Thống kê sự kiện'
  },
  {
    src: '/images/app/lichsuthanhtoan-chitietsukien.webp',
    alt: 'Lịch sử thanh toán',
    title: 'Lịch sử thanh toán'
  }
])

let autoplayInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  // Auto play every 3 seconds
  autoplayInterval = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
/* Custom slider styles */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
