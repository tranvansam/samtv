<template>
  <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Hành Trình <span class="text-orange-500">Nghề Nghiệp</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Từ những dòng code đầu tiên đến Senior Software Engineer
        </p>
      </div>

      <!-- Beautiful Zigzag Timeline -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Elegant Zigzag Path -->
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="none">
            <!-- Smooth curved zigzag path -->
            <path d="M50,80 
                     C150,80 200,120 250,80
                     C300,40 350,80 400,80
                     C450,120 500,80 550,80
                     C600,40 650,80 700,80
                     C750,120 800,80 850,80" 
                  stroke="url(#timelineGradient)" 
                  stroke-width="4" 
                  fill="none" 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  opacity="0.9"/>
            
            <!-- Decorative dots along the path -->
            <circle cx="50" cy="80" r="6" fill="#f97316" opacity="1"/>
            <circle cx="250" cy="80" r="6" fill="#3b82f6" opacity="1"/>
            <circle cx="400" cy="80" r="6" fill="#8b5cf6" opacity="1"/>
            <circle cx="550" cy="80" r="6" fill="#10b981" opacity="1"/>
            <circle cx="700" cy="80" r="6" fill="#f59e0b" opacity="1"/>
            <circle cx="850" cy="80" r="6" fill="#ef4444" opacity="1"/>
            
            <!-- Gradient definition -->
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
                <stop offset="20%" style="stop-color:#3b82f6;stop-opacity:1" />
                <stop offset="40%" style="stop-color:#8b5cf6;stop-opacity:1" />
                <stop offset="60%" style="stop-color:#10b981;stop-opacity:1" />
                <stop offset="80%" style="stop-color:#f59e0b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <!-- Experience Items -->
        <div class="space-y-12">
          <!-- Samsung SDS -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 0ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12"></div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12 pl-8">
              <div class="bg-white rounded-2xl shadow-xl border border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">SAMSUNG</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Senior Software Engineer</h3>
                      <p class="text-orange-500 font-semibold">Samsung SDS</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                      <p class="text-gray-600 text-sm mt-1">Sep 2025 - Present</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Dẫn dắt team phát triển dự án enterprise, tối ưu hóa hiệu suất và đào tạo junior developers.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Permate Global -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 200ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12 pr-8">
              <div class="bg-white rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">PERMATE</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Frontend Developer</h3>
                      <p class="text-blue-500 font-semibold">Permate Global</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                      <p class="text-gray-600 text-sm mt-1">May 2023 - Sep 2025</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Phát triển ứng dụng web hiện đại với Vue.js và Nuxt.js, tối ưu hóa UX.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Nuxt.js</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Frontend</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12"></div>
          </div>

          <!-- Software Developer at Permate -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 400ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12"></div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12 pl-8">
              <div class="bg-white rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">PERMATE</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Software Developer</h3>
                      <p class="text-purple-500 font-semibold">Permate Global</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                      <p class="text-gray-600 text-sm mt-1">May 2023 - Sep 2024</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Phát triển dự án outsourcing, tạo giao diện và xử lý logic nghiệp vụ với khách hàng quốc tế.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Programme Design</span>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Global Client</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Outsourcing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FPT Software -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 600ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12 pr-8">
              <div class="bg-white rounded-2xl shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">FPT</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Software Developer</h3>
                      <p class="text-green-500 font-semibold">FPT Software Company</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                      <p class="text-gray-600 text-sm mt-1">Sep 2021 - May 2023</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Bắt đầu hành trình chuyên nghiệp với việc phát triển dự án outsourcing, tạo giao diện và API.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Project Design</span>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">API Development</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12"></div>
          </div>

          <!-- FPT Polytechnic Lecturer -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 800ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12"></div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12 pl-8">
              <div class="bg-white rounded-2xl shadow-xl border border-indigo-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">FPT</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Lecturer</h3>
                      <p class="text-indigo-500 font-semibold">FPT Polytechnic College</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Part-time</span>
                      <p class="text-gray-600 text-sm mt-1">Aug 2022 - Mar 2023</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Chia sẻ kiến thức và kinh nghiệm thực tế với sinh viên, giảng dạy HTML/CSS và JavaScript.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Teaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- HUONG VIET GROUP -->
          <div 
            class="relative flex items-center justify-between"
            :class="{ 'animate-fade-in-up': isVisible }"
            style="transition-delay: 1000ms;"
          >
            <!-- Left Content -->
            <div class="w-5/12 pr-8">
              <div class="bg-white rounded-2xl shadow-xl border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-white font-bold text-sm">HVT</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900">Vue.js Web Developer</h3>
                      <p class="text-pink-500 font-semibold">HUONG VIET GROUP</p>
                    </div>
                    <div class="text-right">
                      <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                      <p class="text-gray-600 text-sm mt-1">Mar 2021 - Sep 2021</p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm mb-4">
                    Bước đầu tiên trong sự nghiệp lập trình, phát triển dự án sản phẩm và outsourcing với Vue.js.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Web Development</span>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">First Steps</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Center Timeline Dot -->
            <div class="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <!-- Right Content -->
            <div class="w-5/12"></div>
          </div>
        </div>
      </div>

      <!-- Summary Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
          <div class="text-3xl font-bold text-orange-500 mb-2">4+</div>
          <div class="text-gray-700 font-medium">Năm Kinh Nghiệm</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div class="text-3xl font-bold text-blue-500 mb-2">6</div>
          <div class="text-gray-700 font-medium">Công Ty Đã Làm</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div class="text-3xl font-bold text-green-500 mb-2">50+</div>
          <div class="text-gray-700 font-medium">Dự Án Hoàn Thành</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Animation state
const isVisible = ref(false)

// Scroll animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )
  
  const elements = document.querySelectorAll('.animate-fade-in-up')
  elements.forEach(element => {
    observer.observe(element)
  })
})
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-fade-in-up.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>