<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Problem to Solution Flow -->
        <div class="relative mb-20">
          <!-- Animated Arrow Flow -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent opacity-60 animate-pulse"></div>
          <div class="absolute left-1/2 top-32 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-500 animate-bounce"></div>
          
          <!-- Main Container -->
          <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 shadow-2xl">
            <!-- Header -->
            <div class="text-center mb-16">
              <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-8 shadow-2xl">
                <i class="fas fa-exclamation-triangle text-4xl text-white"></i>
              </div>
              <h3 class="text-5xl font-black text-white mb-6">
                Từ Vấn Đề Đến Giải Pháp
                <span class="block text-4xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Manager Money Ra Đời
                </span>
              </h3>
              <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Những khó khăn quản lý tài chính hàng ngày thúc đẩy chúng tôi tạo ra giải pháp toàn diện
              </p>
            </div>
            
            <!-- Problems Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
              <!-- Flow Indicator -->
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div class="w-1 h-16 bg-gradient-to-b from-orange-500 to-transparent opacity-60 animate-pulse"></div>
                <div class="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-500 animate-bounce"></div>
              </div>
              <!-- Problem 1 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-wallet text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Chi Tiêu Cá Nhân</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Khó theo dõi thu chi, quên nợ đến hạn
                  </p>
                </div>
              </div>
              
              <!-- Problem 2 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-users text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Chi Tiêu Nhóm</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Du lịch nhóm, sự kiện không biết tổ chức chi tiêu
                  </p>
                </div>
              </div>
              
              <!-- Problem 3 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-piggy-bank text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Quỹ Tập Thể</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Quản lý quỹ lớp, gia đình rối rắm
                  </p>
                </div>
              </div>
              
              <!-- Problem 4 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-credit-card text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Thanh Toán</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Chuyển khoản thủ công, dễ nhầm lẫn
                  </p>
                </div>
              </div>
              
              <!-- Problem 5 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-chart-line text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Kế Hoạch</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Chi tiêu bừa bãi, vượt ngân sách
                  </p>
                </div>
              </div>
              
              <!-- Problem 6 -->
              <div class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <i class="fas fa-eye-slash text-xl text-white"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Minh Bạch</h4>
                  </div>
                  <p class="text-gray-300 leading-relaxed">
                    Tranh cãi, hiểu lầm, mất lòng tin
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- Solution Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          <!-- Content -->
          <div class="relative">
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
            <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-500/30 rounded-full animate-pulse"></div>
            <div class="absolute top-1/2 -right-8 w-4 h-4 bg-orange-500/40 rounded-full animate-bounce"></div>
            
            <h3 class="text-3xl font-bold text-gray-900 mb-6 flex items-center relative z-10">
              <i class="fas fa-arrow-right text-orange-500 text-2xl mr-4 animate-pulse"></i>
              Manager Money - Giải Pháp Toàn Diện
            </h3>
            <p class="text-lg text-gray-600 mb-8">
              Ứng dụng thông minh giải quyết tất cả vấn đề tài chính từ cá nhân đến nhóm, 
              với tính năng đột phá và tích hợp thanh toán hiện đại.
            </p>
            
            <!-- Key Solutions -->
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">Quản Lý Tất Cả Hoạt Động Nhóm</h4>
                    <p class="text-gray-700">Lập kế hoạch cụ thể cùng với ai được tích hợp ngay trong nhóm - du lịch, ăn uống, sự kiện, quỹ lớp, quỹ gia đình</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">Tích Hợp VNPay - Thanh Toán 1 Chạm</h4>
                    <p class="text-gray-700">Liên kết trực tiếp với VNPay để thanh toán các khoản chi tiêu sự kiện bằng 1 chạm và tự động đồng bộ hóa vào chi tiêu cá nhân</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">Tính Năng Quỹ Cùng Sự Kiện</h4>
                    <p class="text-gray-700">Quản lý quỹ lớp, quỹ gia đình và mọi hoạt động chi tiêu của quỹ với tính năng quỹ cùng sự kiện thông minh</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">Đồng Bộ Tự Động & Minh Bạch</h4>
                    <p class="text-gray-700">Tự động đồng bộ dữ liệu giữa thu chi ↔ nợ ↔ sự kiện, minh bạch tuyệt đối - tránh tranh cãi, nhầm lẫn</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">Quản Lý Mọi Vấn Đề Cuộc Sống</h4>
                    <p class="text-gray-700">Quản lý chi tiêu, nợ nần mọi vấn đề trong cuộc sống - từ chi tiêu cá nhân đến quỹ tập thể, quỹ gia đình</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <!-- Phone Mockup -->
          <div class="relative flex flex-col">
            <div class="bg-white rounded-2xl p-6 shadow-lg flex-1 flex flex-col">
              <div class="flex-1 flex items-center justify-center">
                <!-- iPhone Frame -->
                <div class="relative w-full max-w-sm h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl">
                  <!-- Phone Screen -->
                  <div class="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                    <!-- Dynamic Island -->
                    <div class="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full border border-gray-600 z-20">
                      <div class="flex items-center justify-center h-full">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                        <div class="w-1 h-1 bg-white rounded-full ml-1"></div>
                      </div>
                    </div>
                    
                    <!-- App Content -->
                    <div class="w-full h-full pt-4">
                      <img 
                        src="/images/app/lichchitieu.webp" 
                        alt="Lịch chi tiêu Manager Money" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                    
                    <!-- Home Indicator -->
                    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  <!-- iPhone Buttons -->
                  <div class="absolute right-0 top-16 w-1 h-8 bg-gray-700 rounded-l-full"></div>
                  <div class="absolute right-0 top-24 w-1 h-6 bg-gray-700 rounded-l-full"></div>
                  <div class="absolute right-0 top-32 w-1 h-6 bg-gray-700 rounded-l-full"></div>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-4 text-center">Lịch chi tiêu trực quan và thông minh</p>
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