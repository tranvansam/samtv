<template>
  <header :class="headerClass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center focus:outline-none">
            <div class="flex items-center space-x-3">
              <!-- Logo Image -->
              <img 
                src="/assets/images/logo.webp" 
                alt="Leadsmax Network Logo"
                decoding="async" 
                class="h-10 w-auto"
              />
              <!-- Text Logo (fallback) -->
              <div class="flex flex-col">
                <div class="text-2xl font-utm-hanzel">
                  <span class="text-white">Sam</span>
                  <span class="text-orange-500">TV</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="hidden lg:block">
          <ul class="flex items-center space-x-1">
            <!-- Main Navigation Items -->
            <li v-for="item in mainNavigationItems" :key="item.path" class="relative group">
              <NuxtLink 
                :to="item.path"
                :class="[
                  item.class,
                  'relative px-4 py-2 text-sm font-medium text-white hover:text-orange-400 transition-all duration-300 rounded-lg hover:bg-white/5',
                  isActiveRoute(item.path) ? '!text-orange-400': ''
                ]"
                @click="scrollToTop"
              >
                {{ item.label }}
                <!-- Hover underline effect -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></div>
              </NuxtLink>
            </li>
            
            <!-- Separator -->
            <li class="relative mx-4">
              <div class="w-px h-6 bg-white/20"></div>
            </li>
            
            <!-- Action Buttons -->
            <li v-for="item in actionButtons" :key="item.path" class="relative">
              <a 
                v-if="item.external"
                :href="item.path"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 h-10"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ item.label }}
              </a>
              <NuxtLink 
                v-else
                :to="item.path"
                :class="[
                  'inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 h-10',
                  isActiveRoute(item.path) ? '!text-orange-400' : ''
                ]"
              >
                <svg v-if="item.label === 'ĐĂNG NHẬP'" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <svg v-else-if="item.label === 'ĐĂNG KÝ'" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden text-white hover:text-orange-400 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="showMobileMenu" class="lg:hidden mt-4 pb-4 border-t border-gray-700">
        <ul class="flex flex-col space-y-2 pt-4">
          <li v-for="item in mainNavigationItems" :key="`mobile-${item.path}`">
            <NuxtLink 
              :to="item.path"
              :class="[
                item.mobileClass,
                'block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-300',
                isActiveRoute(item.path) ? '!text-orange-400' : ''
              ]"
              @click="scrollToTopAndCloseMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          
          <!-- Separator -->
          <li class="px-4 py-2">
            <div class="w-full h-px bg-gray-700"></div>
          </li>
          
          <li v-for="item in actionButtons" :key="`mobile-action-${item.path}`">
            <a 
              v-if="item.external"
              :href="item.path"
              target="_blank"
              rel="noopener noreferrer"
              @click="showMobileMenu = false"
              class="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ item.label }}</span>
              </div>
            </a>
          </li>
          

        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { navigationItems } from '~/constants/navigation'

const route = useRoute()
const showMobileMenu = ref(false)
const isScrolled = ref(false)

// Function to check if current route is active
const isActiveRoute = (path) => {
  const isActive = (path === '/' && route.path === '/') || 
                  (path !== '/' && route.path.startsWith(path))
  
  // Debug log
  console.log(`Route check: ${path} vs ${route.path} = ${isActive}`)
  
  return isActive
}

// Separate main navigation items from action buttons
const mainNavigationItems = computed(() => {
  return navigationItems.filter(item => 
    ['VỀ TÔI', 'BÀI VIẾT', 'HỎI ĐÁP', 'HÌNH ẢNH BIỂU DIỄN', 'LIÊN HỆ'].includes(item.label)
  )
})

const actionButtons = computed(() => {
  return navigationItems.filter(item => 
    ['ỨNG DỤNG'].includes(item.label)
  )
})

// Get external URL from environment variables
const getExternalUrl = (envKey) => {
  const config = useRuntimeConfig()
  return config.public[envKey] || '#'
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Function to scroll to top and close mobile menu
const scrollToTopAndCloseMenu = () => {
  scrollToTop()
  showMobileMenu.value = false
}

// Handle scroll and click outside
onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  const handleClickOutside = (e) => {
    if (!e.target.closest('header')) {
      showMobileMenu.value = false
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  
  // Initial check
  onScroll()
  
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', handleClickOutside)
  })
})

const headerClass = computed(() => {
  const classes = [
    'text-white py-4 transition-all duration-300 fixed w-full z-30 top-0 left-0',
    (isScrolled.value || showMobileMenu.value)
      ? 'bg-black/95 backdrop-blur-sm shadow-lg'
      : 'bg-transparent'
  ]
  
  // Debug log
  console.log('Header state:', { 
    isScrolled: isScrolled.value, 
    showMobileMenu: showMobileMenu.value,
    classes: classes.join(' ')
  })
  
  return classes.join(' ')
})
</script> 