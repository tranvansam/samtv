<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Thành Tích <span class="text-orange-500">Của Tôi</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Những con số biết nói về hành trình lập trình và ảo thuật của tôi
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Programming Projects -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 0ms;"
        >
          <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
            {{ animatedStats.projects }}+
          </div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Dự Án Lập Trình</div>
          <div class="text-gray-600 text-sm">Web, Mobile, Desktop Apps</div>
        </div>

        <!-- Magic Shows -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 200ms;"
        >
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
            {{ animatedStats.shows }}+
          </div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Show Ảo Thuật</div>
          <div class="text-gray-600 text-sm">Close-up, Stage, Corporate</div>
        </div>

        <!-- Years Experience -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 400ms;"
        >
          <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-purple-500 mb-2">
            {{ animatedStats.experience }}+
          </div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Năm Kinh Nghiệm</div>
          <div class="text-gray-600 text-sm">Lập Trình + Ảo Thuật</div>
        </div>

        <!-- Students Trained -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 600ms;"
        >
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-green-500 mb-2">
            {{ animatedStats.students }}+
          </div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Học Viên Đào Tạo</div>
          <div class="text-gray-600 text-sm">Lập Trình & Ảo Thuật</div>
        </div>
      </div>

      <!-- All Achievements Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <!-- Student Talent Champion 2018 -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 1400ms;"
        >
          <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">2018</div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Quán Quân Tài Năng Sinh Viên</div>
          <div class="text-gray-600 text-sm">Cuộc thi tài năng sinh viên trong trường</div>
        </div>

        <!-- Combined Career Achievements -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-indigo-500/10 to-indigo-600/20 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 1600ms;"
        >
          <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-indigo-500 mb-4">Hành Trình</div>
          <div class="text-gray-900 font-semibold text-lg mb-3">Nghề Nghiệp & Học Vấn</div>
          <div class="text-gray-700 text-sm space-y-2 text-left">
            <div class="flex items-center">
              <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span>Tốt nghiệp Kỹ sư phần mềm (2014-2019)</span>
            </div>
            <div class="flex items-center">
              <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span>Từng là giảng viên tại Cao đẳng FPT</span>
            </div>
            <div class="flex items-center">
              <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span>6 năm kinh nghiệm với thị trường Âu, Hàn, Nhật</span>
            </div>
            <div class="flex items-center">
              <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span>Hiện là Kỹ sư phần mềm tại Samsung SDS</span>
            </div>
          </div>
        </div>

        <!-- Got Talent Central Region 3rd Place -->
        <div 
          class="text-center p-8 bg-gradient-to-br from-red-500/10 to-red-600/20 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="transition-delay: 1800ms;"
        >
          <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-red-500 mb-2">Giải Ba</div>
          <div class="text-gray-900 font-semibold text-lg mb-2">Got Talent Miền Trung</div>
          <div class="text-gray-600 text-sm">Cuộc thi tài năng khu vực miền Trung</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Animation state
const isVisible = ref(false)

// Stats data
const stats = {
  projects: 20,
  shows: 500,
  experience: 6, // 6 years programming
  students: 70
}

// Animated stats (start from 0)
const animatedStats = ref({
  projects: 0,
  shows: 0,
  experience: 0,
  students: 0
})

// Count animation function
const animateCount = (target, key, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16) // 60 FPS
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    animatedStats.value[key] = Math.floor(current)
  }, 16)
}

// Start animation function
const startAnimations = () => {
  if (isVisible.value) return
  
  isVisible.value = true
  // Start counting animation with delays
  setTimeout(() => animateCount(stats.projects, 'projects', 2000), 500)
  setTimeout(() => animateCount(stats.shows, 'shows', 2500), 700)
  setTimeout(() => animateCount(stats.experience, 'experience', 3000), 900)
  setTimeout(() => animateCount(stats.students, 'students', 2200), 1100)
}

// Scroll animation
onMounted(() => {
  // Fallback: start animation after 1 second if not triggered by scroll
  const fallbackTimer = setTimeout(() => {
    if (!isVisible.value) {
      startAnimations()
    }
  }, 1000)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer)
          startAnimations()
        }
      })
    },
    { threshold: 0.1 }
  )
  
  // Observe the section element
  const sectionElement = document.querySelector('section')
  if (sectionElement) {
    observer.observe(sectionElement)
  }
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

/* Gradient text effect */
.text-orange-500 {
  background: linear-gradient(135deg, #f97316, #ea580c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-blue-500 {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-purple-500 {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-green-500 {
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-yellow-500 {
  background: linear-gradient(135deg, #eab308, #ca8a04);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-red-500 {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-indigo-500 {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-teal-500 {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-cyan-500 {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-emerald-500 {
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
