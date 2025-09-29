<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Images Swiper -->
          <div class="relative order-2 lg:order-1">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <div class="mb-4">
                <img 
                  src="/images/app/qln.webp" 
                  alt="Quản lý nợ thông minh" 
                  class="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <p class="text-sm text-gray-600 text-center">Quản lý nợ thông minh</p>
            </div>
          </div>
          
          <!-- Content -->
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
               Quản Lý Nợ
            </div>
            
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Quản Lý Các Khoản Nợ Thông Minh
            </h2>
            
            <p class="text-xl text-gray-600 mb-8">
              Quản lý các khoản nợ phải trả và cho vay với nhắc nhở tự động và xác nhận thanh toán minh bạch.
            </p>
            
            <!-- Features List -->
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Quản Lý Nợ & Cho Vay</h3>
                  <p class="text-gray-600">Quản lý các khoản nợ phải trả và cho vay một cách chi tiết</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Nhắc Nhở Tự Động</h3>
                  <p class="text-gray-600">Tự động nhắc nhở khi đến hạn trả hoặc góp theo tháng</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Thông Tin Chi Tiết</h3>
                  <p class="text-gray-600">Hiển thị chi tiết thông tin người cho vay/đang vay</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">Xác Nhận Thanh Toán</h3>
                  <p class="text-gray-600">Khi thanh toán, người nợ sẽ xác nhận đã trả → khoản nợ chính thức hoàn tất</p>
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
// Component logic here
</script>
