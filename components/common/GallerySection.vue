<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Thư Viện <span class="text-orange-500">Ảnh & Video</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Khám phá những màn trình diễn ảo thuật đầy ấn tượng qua bộ sưu tập ảnh và video
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          :class="[
            'px-6 py-3 rounded-full font-medium transition-all duration-300',
            activeFilter === filter.id
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Gallery Items -->
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          @click="openModal(item)"
        >
          <div class="relative aspect-square">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg v-if="item.type === 'video'" class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-white">
            <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ item.date }}</p>
            <div class="flex items-center justify-between">
              <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                {{ item.category }}
              </span>
              <span class="text-xs text-gray-500">{{ item.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button
          @click="loadMore"
          class="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
        >
          Xem Thêm
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedItem"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-[90vh] mx-4" @click.stop>
        <button
          @click="closeModal"
          class="fixed top-4 right-4 z-[60] bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <div class="bg-white rounded-xl overflow-hidden">
          <div class="relative">
            <img
              v-if="selectedItem.type === 'photo'"
              :src="selectedItem.fullSize"
              :alt="selectedItem.title"
              loading="lazy"
              decoding="async"
              class="w-full max-h-[70vh] object-cover"
            />
            <iframe
              v-else-if="selectedItem.videoUrl.includes('youtu.be')"
              :src="`https://www.youtube.com/embed/${selectedItem.videoUrl.split('youtu.be/')[1].split('?')[0]}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-[400px] md:h-[500px]"
            ></iframe>
            <video
              v-else
              :src="selectedItem.videoUrl"
              controls
              class="w-full max-h-[70vh] object-cover"
            ></video>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedItem.title }}</h3>
            <p class="text-gray-600 mb-4">{{ selectedItem.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ selectedItem.date }}</span>
              <span class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {{ selectedItem.category }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    default: 'Thư Viện Ảnh & Video'
  },
  subtitle: {
    type: String,
    default: 'Khám phá những màn trình diễn ảo thuật đầy ấn tượng qua bộ sưu tập ảnh và video'
  },
  items: {
    type: Array,
    default: () => []
  }
})

// Reactive data
const activeFilter = ref('all')
const selectedItem = ref(null)
const currentPage = ref(1)
const itemsPerPage = 12

// Filter options
const filters = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'photos', label: 'Ảnh' },
  { id: 'videos', label: 'Video' },
  { id: 'close-up', label: 'Gần' },
  { id: 'stage', label: 'Sân Khấu' }
]

// Sample gallery data (fallback if no items provided)
const defaultItems = [
  {
    id: 1,
    type: 'photo',
    title: 'Ảo Thuật Bài Close-up',
    category: 'Gần',
    date: '15 Tháng 12, 2024',
    duration: '2 phút',
    thumbnail: '/images/blog-1.webp',
    fullSize: '/images/blog-1.webp',
    description: 'Màn trình diễn ảo thuật bài gần với khán giả, tạo ra những khoảnh khắc đầy bất ngờ.'
  },
  {
    id: 2,
    type: 'photo',
    title: 'Biểu Diễn Sân Khấu',
    category: 'Sân Khấu',
    date: '10 Tháng 12, 2024',
    duration: '5 phút',
    thumbnail: '/images/blog-2.webp',
    fullSize: '/images/blog-2.webp',
    description: 'Màn trình diễn ảo thuật sân khấu với đông đảo khán giả, tạo ra không khí sôi động.'
  },
  {
    id: 3,
    type: 'photo',
    title: 'Ảo Thuật Xu',
    category: 'Gần',
    date: '5 Tháng 12, 2024',
    duration: '3 phút',
    thumbnail: '/images/blog-3.webp',
    fullSize: '/images/blog-3.webp',
    description: 'Những màn ảo thuật với đồng xu đầy ấn tượng và bất ngờ.'
  },
  {
    id: 4,
    type: 'photo',
    title: 'Hội Thảo Ảo Thuật',
    category: 'Hội Thảo',
    date: '1 Tháng 12, 2024',
    duration: '4 giờ',
    thumbnail: '/images/blog-4.webp',
    fullSize: '/images/blog-4.webp',
    description: 'Buổi hội thảo dạy ảo thuật cơ bản cho các bạn trẻ yêu thích nghệ thuật này.'
  },
  {
    id: 5,
    type: 'video',
    title: 'Ảo Thuật Bài - Video',
    category: 'Gần',
    date: '25 Tháng 11, 2024',
    duration: '3:45',
    thumbnail: '/images/blog-1.webp',
    videoUrl: '/videos/magic-card-trick.mp4',
    description: 'Video ghi lại màn trình diễn ảo thuật bài đầy ấn tượng.'
  },
  {
    id: 6,
    type: 'video',
    title: 'Biểu Diễn Sân Khấu - Video',
    category: 'Sân Khấu',
    date: '20 Tháng 11, 2024',
    duration: '8:30',
    thumbnail: '/images/blog-2.webp',
    videoUrl: '/videos/stage-magic-show.mp4',
    description: 'Video đầy đủ màn trình diễn ảo thuật sân khấu với nhiều tiết mục hấp dẫn.'
  }
]

// Use provided items or default items
const galleryItems = computed(() => props.items.length > 0 ? props.items : defaultItems)

// Computed properties
const filteredItems = computed(() => {
  let filtered = galleryItems.value
  
  if (activeFilter.value === 'photos') {
    filtered = galleryItems.value.filter(item => item.type === 'photo')
  } else if (activeFilter.value === 'videos') {
    filtered = galleryItems.value.filter(item => item.type === 'video')
  } else if (activeFilter.value === 'close-up') {
    filtered = galleryItems.value.filter(item => item.category === 'Gần')
  } else if (activeFilter.value === 'stage') {
    filtered = galleryItems.value.filter(item => item.category === 'Sân Khấu')
  }
  
  return filtered.slice(0, currentPage.value * itemsPerPage)
})

// Methods
const openModal = (item) => {
  selectedItem.value = item
}

const closeModal = () => {
  selectedItem.value = null
}

const loadMore = () => {
  currentPage.value++
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
