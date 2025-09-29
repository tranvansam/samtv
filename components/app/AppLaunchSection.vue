<template>
  <section class="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Section Title -->
        <div class="mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Thời Điểm Ra Mắt
          </h2>
          <p class="text-xl text-gray-300">
            Sẵn sàng để đồng hành cùng bạn trong mọi hoạt động tài chính hằng ngày và các sự kiện quan trọng
          </p>
        </div>
        
        <!-- Launch Date -->
        <div class="relative overflow-hidden">
          <!-- Animated Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-3xl"></div>
          
          <!-- Floating Elements -->
          <div class="absolute top-4 right-4 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
          <div class="absolute bottom-4 left-4 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-8 w-12 h-12 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
          
          <div class="relative bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 mb-16 border border-white/20">
            <!-- Badge -->
            <div class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-sm rounded-full text-orange-200 text-xl font-semibold mb-8 border border-orange-400/40 shadow-lg">
              <div class="w-4 h-4 bg-orange-400 rounded-full mr-4 animate-pulse"></div>
              Ngày Phát Hành Chính Thức
            </div>
            
            <!-- Date Display -->
            <div class="mb-8">
              <h3 class="text-7xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
                22/12/2025
              </h3>
              <div class="text-3xl font-bold text-white mb-2">Thứ Hai</div>
              <div class="text-xl text-gray-300">Tháng 12, 2025</div>
            </div>
            
            <p class="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Manager Money sẽ chính thức ra mắt và sẵn sàng phục vụ bạn với 
              <span class="text-orange-300 font-semibold">trợ lý AI thông minh</span> và 
              <span class="text-orange-300 font-semibold">tính năng đột phá</span>
            </p>
            
            <!-- Countdown Timer -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div class="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" id="days">--</div>
                <div class="text-white/80 font-semibold text-lg">Ngày</div>
              </div>
              <div class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div class="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" id="hours">--</div>
                <div class="text-white/80 font-semibold text-lg">Giờ</div>
              </div>
              <div class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div class="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" id="minutes">--</div>
                <div class="text-white/80 font-semibold text-lg">Phút</div>
              </div>
              <div class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div class="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" id="seconds">--</div>
                <div class="text-white/80 font-semibold text-lg">Giây</div>
              </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button @click="showEmailModal = true" class="group px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
                <span class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path>
                  </svg>
                  Đăng Ký Nhận Thông Báo
                </span>
              </button>
              <button @click="showDemoModal = true" class="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl hover:scale-105">
                <span class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                  </svg>
                  Xem Demo Trước
                </span>
              </button>
            </div>
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
    
    <!-- Demo Modal -->
    <div v-if="showDemoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" @click="showDemoModal = false">
      <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300" @click.stop>
        <!-- Close Button -->
        <button @click="showDemoModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
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
            Demo Sắp Ra Mắt
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Chúng tôi sẽ cập nhật demo và beta vào ngày <strong class="text-orange-500">20/10</strong> cùng với bảng beta. Hãy đợi chúng tôi tý nhé!
          </p>
          <p class="text-sm text-gray-500 mb-6">
            Cảm ơn bạn đã quan tâm đến <strong class="text-orange-500">Manager Money</strong>.
          </p>
          
          <!-- Action Button -->
          <button @click="showDemoModal = false" class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors">
            Đóng
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
import { onMounted, onUnmounted } from 'vue'

// Modal states
const showEmailModal = ref(false)
const showDemoModal = ref(false)
const showSuccessNotification = ref(false)
const email = ref('')
const isLoading = ref(false)

// Email submit handler
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

let countdownInterval = null

const updateCountdown = () => {
  const launchDate = new Date('2025-12-22T00:00:00').getTime()
  const now = new Date().getTime()
  const distance = launchDate - now

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const daysEl = document.getElementById('days')
    const hoursEl = document.getElementById('hours')
    const minutesEl = document.getElementById('minutes')
    const secondsEl = document.getElementById('seconds')

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0')
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0')
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0')
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0')
  } else {
    // Launch date has passed
    const daysEl = document.getElementById('days')
    const hoursEl = document.getElementById('hours')
    const minutesEl = document.getElementById('minutes')
    const secondsEl = document.getElementById('seconds')

    if (daysEl) daysEl.textContent = '00'
    if (hoursEl) hoursEl.textContent = '00'
    if (minutesEl) minutesEl.textContent = '00'
    if (secondsEl) secondsEl.textContent = '00'
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
