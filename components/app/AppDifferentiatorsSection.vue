<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Điểm Khác Biệt
          </h2>
          <p class="text-xl text-gray-600">
            Những ưu điểm độc đáo giúp Manager Money vượt trội so với các ứng dụng khác
          </p>
        </div>
        
        <!-- Differentiators Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Minh bạch tuyệt đối -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Minh Bạch Tuyệt Đối</h3>
            <p class="text-gray-600 mb-4">
              Trong chi tiêu nhóm → tránh tranh cãi, nhầm lẫn. Mọi giao dịch đều được ghi lại và hiển thị rõ ràng.
            </p>
            <button @click="showDetailModal = true" class="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <!-- Đồng bộ tự động -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Đồng Bộ Tự Động</h3>
            <p class="text-gray-600 mb-4">
              Giữa các module (thu chi ↔ nợ ↔ sự kiện). Không cần nhập tay nhiều lần, dữ liệu được cập nhật real-time.
            </p>
            <button @click="showDetailModal = true" class="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <!-- Trải nghiệm trực quan -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Trải Nghiệm Trực Quan</h3>
            <p class="text-gray-600 mb-4">
              Với lịch, biểu đồ, thông báo tức thì. Giao diện thân thiện, dễ sử dụng cho mọi lứa tuổi.
            </p>
            <button @click="showDetailModal = true" class="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <!-- Đa năng -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Đa Năng</h3>
            <p class="text-gray-600 mb-4">
              Phù hợp cả cho cá nhân quản lý tài chính và nhóm bạn/ gia đình / công ty. Một ứng dụng cho mọi nhu cầu.
            </p>
            <button @click="showDetailModal = true" class="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <!-- Chia tiền thông minh -->
          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.83 1.07M12 8V6m0 2v2m0-2h2m-2 0H8m4 0v2m0-2h2m-2 0H8"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Chia Tiền Thông Minh</h3>
            <p class="text-gray-600 mb-4">
              Chia đều hoặc tùy chỉnh theo từng người. Phù hợp cho mọi tình huống từ cafe đến du lịch.
            </p>
            <button @click="showDetailModal = true" class="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors cursor-pointer">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <!-- Xác nhận thanh toán -->
          <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200">
            <div class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Xác Nhận Thanh Toán</h3>
            <p class="text-gray-600 mb-4">
              Gửi yêu cầu và xác nhận trực tiếp trong app. Đảm bảo tính minh bạch và tránh tranh cãi.
            </p>
            <div class="flex items-center text-yellow-600 font-semibold">
              <span>Xem chi tiết</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Detail Modal -->
    <div v-if="showDetailModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" @click="showDetailModal = false">
      <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300" @click.stop>
        <!-- Close Button -->
        <button @click="showDetailModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Icon -->
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <!-- Content -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Đang Cập Nhật
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Chúng tôi sẽ cập nhật tài liệu và beta vào ngày <strong class="text-orange-500">20/10</strong> tới, hãy đợi chúng tôi tý nhé!
          </p>
          <p class="text-sm text-gray-500 mb-6">
            Cảm ơn bạn đã quan tâm đến <strong class="text-orange-500">Manager Money</strong>.
          </p>
          
          <!-- Action Button -->
          <button @click="showDetailModal = false" class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors">
            Đóng
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const showDetailModal = ref(false)
</script>
