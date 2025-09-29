<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
               Quản Lý Thu Chi
            </div>
            
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Ghi Chép Thu Chi Hằng Ngày
            </h2>
            
            <p class="text-xl text-gray-600 mb-8">
              Hiển thị rõ ràng trên lịch chi tiêu, xem chi tiết thu – chi từng ngày chỉ với 1 chạm và biểu đồ so sánh thu chi từng tháng.
            </p>
            
            <!-- Features List -->
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Lịch Chi Tiêu Trực Quan</h3>
                  <p class="text-gray-600">Hiển thị rõ ràng thu chi trên lịch, dễ dàng theo dõi</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Chi Tiết Từng Ngày</h3>
                  <p class="text-gray-600">Xem chi tiết thu – chi từng ngày chỉ với 1 chạm</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Biểu Đồ So Sánh</h3>
                  <p class="text-gray-600">So sánh thu chi từng tháng, nắm bắt xu hướng tài chính</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Đồng Bộ Tự Động</h3>
                  <p class="text-gray-600">Đồng bộ dữ liệu với quản lý nợ và sự kiện</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Images Swiper -->
          <div class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <div class="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="/images/app/lichchitieu.webp" 
                  alt="Lịch chi tiêu" 
                  class="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <p class="text-sm text-gray-600 text-center">Lịch chi tiêu trực quan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>
