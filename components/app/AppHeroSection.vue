<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <!-- Background Image -->
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/app/bg.webp')">
              <div class="absolute inset-0 bg-black/80"></div>
            </div>
    
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-left">
          <!-- Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-200 text-lg font-semibold mb-8 border border-orange-400/40 shadow-lg">
            <span class="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></span>
            Sắp ra mắt 22/12/2025
          </div>
          
          <!-- Main Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Manager Money
            <span class="block text-5xl md:text-6xl lg:text-7xl text-orange-500 font-black drop-shadow-xl">
              Quản Lý Tài Chính Thông Minh
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
            Ứng dụng toàn diện quản lý thu chi – nợ – sự kiện cho cá nhân & nhóm bạn.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <button @click="showComingSoonModal = true" class="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
              Tải Về Ngay
            </button>
            <button @click="showEmailModal = true" class="px-10 py-5 bg-white/20 backdrop-blur-sm text-white font-bold text-xl rounded-2xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-xl hover:scale-105">
              Đăng Ký Nhận Thông Báo
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Coming Soon Modal -->
    <div v-if="showComingSoonModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" @click="showComingSoonModal = false">
      <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300" @click.stop>
        <!-- Close Button -->
        <button @click="showComingSoonModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
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
            Sắp Ra Mắt
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Đội ngũ phát triển chúng tôi đang nỗ lực hoàn thiện từng tính năng để mang đến trải nghiệm tốt nhất cho người dùng. 
            <strong class="text-orange-500">Manager Money</strong> sẽ chính thức ra mắt vào ngày <strong class="text-orange-500">22/12/2025</strong>.
          </p>
          <p class="text-sm text-gray-500 mb-6">
            Hãy đăng ký nhận thông báo để không bỏ lỡ cơ hội trải nghiệm ứng dụng đầu tiên!
          </p>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button @click="showComingSoonModal = false; showEmailModal = true" class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors">
              Đăng Ký Nhận Thông Báo
            </button>
            <button @click="showComingSoonModal = false" class="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Email Registration Modal -->
    <div v-if="showEmailModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" @click="showEmailModal = false">
      <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300" @click.stop>
        <!-- Close Button -->
        <button @click="showEmailModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Icon -->
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </div>
        
        <!-- Content -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Đăng Ký Nhận Thông Báo
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Nhập email của bạn để nhận thông báo khi <strong class="text-orange-500">Manager Money</strong> chính thức ra mắt vào ngày <strong class="text-orange-500">22/12/2025</strong>.
          </p>
          
          <!-- Email Form -->
          <form @submit.prevent="handleEmailSubmit" class="space-y-4">
            <div>
              <input 
                v-model="email" 
                type="email" 
                placeholder="Nhập email của bạn"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                :disabled="isLoading"
              />
            </div>
            
            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isLoading || !email"
              class="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="isLoading">Đang xử lý...</span>
              <span v-else>Xác Nhận</span>
            </button>
          </form>
          
          <!-- Cancel Button -->
          <button @click="showEmailModal = false" class="mt-4 px-6 py-2 text-gray-500 hover:text-gray-700 transition-colors">
            Hủy
          </button>
        </div>
      </div>
    </div>
    
    <!-- Success Notification -->
    <div v-if="showSuccessNotification" class="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300">
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <span class="font-semibold">Đăng ký thành công!</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const showComingSoonModal = ref(false)
const showEmailModal = ref(false)
const showSuccessNotification = ref(false)
const email = ref('')
const isLoading = ref(false)

const handleEmailSubmit = async () => {
  if (!email.value) return
  
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isLoading.value = false
  showEmailModal.value = false
  showSuccessNotification.value = true
  
  // Reset form
  email.value = ''
  
  // Hide success notification after 3 seconds
  setTimeout(() => {
    showSuccessNotification.value = false
  }, 3000)
}
</script>
