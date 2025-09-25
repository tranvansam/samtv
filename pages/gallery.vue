<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex flex-col justify-center overflow-hidden">
      <!-- Background -->
      <div class="fixed inset-0" style="z-index: -1">
        <img 
          src="/images/hero-background.webp" 
          alt="Nền Gallery"
          decoding="async"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/70"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl w-[100%] mx-auto px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-white block text-2xl md:text-2xl lg:text-3xl font-medium mb-2">
              Khoảnh Khắc
            </span>
            <span class="text-orange-500 block leading-tight uppercase">
              Biểu Diễn
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Những màn trình diễn ảo thuật đầy ấn tượng và bất ngờ, được ghi lại qua từng khoảnh khắc
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Filter Tabs -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Thư Viện <span class="text-orange-500">Ảnh & Video</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những màn trình diễn ảo thuật đầy ấn tượng qua bộ sưu tập ảnh và video
          </p>
        </div>

        <!-- Auto-play Video Banner -->
        <div v-if="selectedItem && selectedItem.type === 'video'" class="mb-8">
          <div class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl p-6 text-white text-center relative overflow-hidden">
            <!-- Animated background -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-center gap-3 mb-4">
                <div class="bg-white/20 rounded-full p-3 animate-bounce">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold">🎬 Video Đang Phát</h3>
                  <p class="text-orange-100 text-lg">{{ selectedItem.title }}</p>
                </div>
              </div>
              
              <div class="flex items-center justify-center gap-4 text-sm">
                <div class="bg-white/20 rounded-full px-4 py-2">
                  <span class="font-medium">⭐ Phong cách Retro</span>
                </div>
                <div class="bg-white/20 rounded-full px-4 py-2">
                  <span class="font-medium">🎭 Ảo thuật chuyên nghiệp</span>
                </div>
                <div class="bg-white/20 rounded-full px-4 py-2">
                  <span class="font-medium">🔥 Độc đáo & Ấn tượng</span>
                </div>
              </div>
            </div>
          </div>
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
          <!-- Photo Items -->
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
    </section>

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
  </div>
</template>

<script setup>
// Set page meta with comprehensive SEO
useHead({
  title: "Gallery Ảnh & Video Biểu Diễn Ảo Thuật | Trần Sâm - Ảo Thuật Gia Chuyên Nghiệp",
  meta: [
    {
      name: "description",
      content: "Khám phá bộ sưu tập ảnh và video biểu diễn ảo thuật đầy ấn tượng của Trần Sâm. Close-up magic, stage magic, workshop ảo thuật. Xem ngay các màn trình diễn ấn tượng!"
    },
    {
      name: "keywords",
      content: "gallery ảo thuật, video ảo thuật, ảnh biểu diễn ảo thuật, close-up magic, stage magic, workshop ảo thuật, Trần Sâm, ảo thuật gia, biểu diễn ảo thuật, magic show"
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Trần Sâm" },
    { property: "og:title", content: "Gallery Ảnh & Video Biểu Diễn Ảo Thuật | Trần Sâm" },
    { property: "og:description", content: "Bộ sưu tập ảnh và video biểu diễn ảo thuật đầy ấn tượng của Trần Sâm" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://transam.dev/gallery" },
    { property: "og:image", content: "https://transam.dev/images/blog-1.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Gallery Ảnh & Video Biểu Diễn Ảo Thuật" },
    { name: "twitter:description", content: "Khám phá những màn trình diễn ảo thuật đầy ấn tượng" }
  ],
  link: [
    { rel: "canonical", href: "https://transam.dev/gallery" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MediaGallery",
        "name": "Gallery Ảnh & Video Biểu Diễn Ảo Thuật",
        "description": "Bộ sưu tập ảnh và video biểu diễn ảo thuật của Trần Sâm",
        "url": "https://transam.dev/gallery",
        "author": {
          "@type": "Person",
          "name": "Trần Sâm",
          "jobTitle": "Ảo Thuật Gia"
        },
        "about": {
          "@type": "Thing",
          "name": "Ảo Thuật",
          "description": "Nghệ thuật biểu diễn ảo thuật"
        },
        "genre": ["Ảo Thuật", "Close-up Magic", "Stage Magic", "Mentalism"],
        "inLanguage": "vi"
      })
    }
  ]
});

// Reactive data
const activeFilter = ref('all')
const selectedItem = ref(null)
const currentPage = ref(1)
const itemsPerPage = 12

// Auto-open video on page load
onMounted(() => {
  // Find the first video item (retro video)
  const firstVideo = galleryItems.find(item => item.type === 'video')
  if (firstVideo) {
    // Auto-open the video after a short delay
    setTimeout(() => {
      selectedItem.value = firstVideo
    }, 1500) // 1.5 second delay to let page load
  }
})

// Filter options
const filters = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'photos', label: 'Ảnh' },
  { id: 'videos', label: 'Video' },
  { id: 'close-up', label: 'Gần' },
  { id: 'stage', label: 'Sân Khấu' }
]

// Gallery data with real performance images
const galleryItems = [
  {
    id: 1,
    type: 'video',
    title: 'Video Biểu Diễn Ảo Thuật Retro',
    category: 'Sân Khấu',
    date: '1 Tháng 1, 2025',
    duration: '10:30',
    thumbnail: 'https://img.youtube.com/vi/dolMOjWuqcs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/dolMOjWuqcs?si=A5LtrNULLQTywyx4',
    description: 'Video biểu diễn ảo thuật retro đầy ấn tượng, thể hiện tài năng và phong cách độc đáo của ảo thuật gia.'
  },
  {
    id: 2,
    type: 'photo',
    title: 'Biểu Diễn Gần Công Ty',
    category: 'Gần',
    date: '15 Tháng 12, 2024',
    duration: '2 phút',
    thumbnail: '/images/new/bieu-dien-gan-company.webp',
    fullSize: '/images/new/bieu-dien-gan-company.webp',
    description: 'Màn trình diễn ảo thuật gần với nhân viên công ty, tạo ra những khoảnh khắc đầy bất ngờ và thú vị.'
  },
  {
    id: 3,
    type: 'photo',
    title: 'Biểu Diễn Sân Khấu Hội Trại',
    category: 'Sân Khấu',
    date: '10 Tháng 12, 2024',
    duration: '5 phút',
    thumbnail: '/images/new/bieu-dien-san-khau-hoi-trai.webp',
    fullSize: '/images/new/bieu-dien-san-khau-hoi-trai.webp',
    description: 'Màn trình diễn ảo thuật sân khấu tại hội trại với đông đảo khán giả, tạo ra không khí sôi động.'
  },
  {
    id: 4,
    type: 'photo',
    title: 'Biểu Diễn Tại Vincom',
    category: 'Sân Khấu',
    date: '5 Tháng 12, 2024',
    duration: '3 phút',
    thumbnail: '/images/new/bieu-dien-tai-vincom.webp',
    fullSize: '/images/new/bieu-dien-tai-vincom.webp',
    description: 'Màn trình diễn ảo thuật tại trung tâm thương mại Vincom với khán giả đông đảo.'
  },
  {
    id: 5,
    type: 'photo',
    title: 'Biểu Diễn Đám Cưới',
    category: 'Sân Khấu',
    date: '1 Tháng 12, 2024',
    duration: '4 giờ',
    thumbnail: '/images/new/bieu-dien-dam-cuoi.webp',
    fullSize: '/images/new/bieu-dien-dam-cuoi.webp',
    description: 'Màn trình diễn ảo thuật tại đám cưới, mang lại niềm vui cho cô dâu chú rể và khách mời.'
  },
  {
    id: 6,
    type: 'photo',
    title: 'Biểu Diễn Sinh Nhật',
    category: 'Gần',
    date: '25 Tháng 11, 2024',
    duration: '3:45',
    thumbnail: '/images/new/bieu-dien-sinh-nhat.webp',
    fullSize: '/images/new/bieu-dien-sinh-nhat.webp',
    description: 'Màn trình diễn ảo thuật tại bữa tiệc sinh nhật, tạo ra những khoảnh khắc đáng nhớ.'
  },
  {
    id: 7,
    type: 'photo',
    title: 'Biểu Diễn Hội Xuân',
    category: 'Sân Khấu',
    date: '20 Tháng 11, 2024',
    duration: '8:30',
    thumbnail: '/images/new/bieu-dien-hoi-xuan.webp',
    fullSize: '/images/new/bieu-dien-hoi-xuan.webp',
    description: 'Màn trình diễn ảo thuật tại hội xuân, mang không khí vui tươi cho mọi người.'
  },
  {
    id: 8,
    type: 'photo',
    title: 'Biểu Diễn Halloween',
    category: 'Sân Khấu',
    date: '15 Tháng 11, 2024',
    duration: '6 phút',
    thumbnail: '/images/new/bieu-dien-halowin.webp',
    fullSize: '/images/new/bieu-dien-halowin.webp',
    description: 'Màn trình diễn ảo thuật trong không khí Halloween, tạo ra những bất ngờ thú vị.'
  },
  {
    id: 9,
    type: 'photo',
    title: 'Biểu Diễn Noel',
    category: 'Sân Khấu',
    date: '10 Tháng 11, 2024',
    duration: '15:20',
    thumbnail: '/images/new/bieu-dien-noel.webp',
    fullSize: '/images/new/bieu-dien-noel.webp',
    description: 'Màn trình diễn ảo thuật trong dịp Giáng sinh, mang lại niềm vui cho mọi người.'
  },
  {
    id: 10,
    type: 'photo',
    title: 'Biểu Diễn Sân Khấu Ngoài Trời',
    category: 'Sân Khấu',
    date: '5 Tháng 11, 2024',
    duration: '4 phút',
    thumbnail: '/images/new/bieu-dien-san-khau-ngoai-troi.webp',
    fullSize: '/images/new/bieu-dien-san-khau-ngoai-troi.webp',
    description: 'Màn trình diễn ảo thuật sân khấu ngoài trời với không gian rộng lớn và khán giả đông đảo.'
  },
  {
    id: 11,
    type: 'photo',
    title: 'Biểu Diễn Sân Khấu Thiếu Nhi',
    category: 'Sân Khấu',
    date: '1 Tháng 11, 2024',
    duration: '3 phút',
    thumbnail: '/images/new/bieu-dien-san-khau-thieu-nhi.webp',
    fullSize: '/images/new/bieu-dien-san-khau-thieu-nhi.webp',
    description: 'Màn trình diễn ảo thuật dành cho thiếu nhi, tạo ra những khoảnh khắc vui tươi và đáng nhớ.'
  },
  {
    id: 12,
    type: 'photo',
    title: 'Biểu Diễn Chủ Đề',
    category: 'Sân Khấu',
    date: '25 Tháng 10, 2024',
    duration: '5 phút',
    thumbnail: '/images/new/bieu-dien-chu-he.webp',
    fullSize: '/images/new/bieu-dien-chu-he.webp',
    description: 'Màn trình diễn ảo thuật theo chủ đề đặc biệt, tạo ra những trải nghiệm độc đáo.'
  },
  {
    id: 13,
    type: 'photo',
    title: 'Biểu Diễn Chủ Đề Thiếu Nhi',
    category: 'Sân Khấu',
    date: '20 Tháng 10, 2024',
    duration: '4 phút',
    thumbnail: '/images/new/bieu-dien-chu-he-thieu-nhi.webp',
    fullSize: '/images/new/bieu-dien-chu-he-thieu-nhi.webp',
    description: 'Màn trình diễn ảo thuật chủ đề thiếu nhi, mang lại niềm vui cho các em nhỏ.'
  },
  {
    id: 14,
    type: 'photo',
    title: 'Biểu Diễn Cận Cảnh',
    category: 'Gần',
    date: '15 Tháng 10, 2024',
    duration: '3 phút',
    thumbnail: '/images/new/bieu-dien-can-canh.webp',
    fullSize: '/images/new/bieu-dien-can-canh.webp',
    description: 'Màn trình diễn ảo thuật cận cảnh, tạo ra những khoảnh khắc đầy bất ngờ và ấn tượng.'
  },
  {
    id: 15,
    type: 'photo',
    title: 'Biểu Diễn Giao Lưu',
    category: 'Gần',
    date: '10 Tháng 10, 2024',
    duration: '2 phút',
    thumbnail: '/images/new/bieu-dien-giao-luu.webp',
    fullSize: '/images/new/bieu-dien-giao-luu.webp',
    description: 'Màn trình diễn ảo thuật giao lưu với khán giả, tạo ra sự tương tác thú vị.'
  },
  {
    id: 16,
    type: 'photo',
    title: 'Biểu Diễn Hội Chợ',
    category: 'Sân Khấu',
    date: '5 Tháng 10, 2024',
    duration: '6 phút',
    thumbnail: '/images/new/bieu-dien-hoi-cho.webp',
    fullSize: '/images/new/bieu-dien-hoi-cho.webp',
    description: 'Màn trình diễn ảo thuật tại hội chợ, thu hút đông đảo khán giả tham quan.'
  },
  {
    id: 17,
    type: 'photo',
    title: 'Biểu Diễn Trung Tâm Anh Ngữ',
    category: 'Sân Khấu',
    date: '1 Tháng 10, 2024',
    duration: '4 phút',
    thumbnail: '/images/new/bieu-dien-trung-tam-anh-ngu.webp',
    fullSize: '/images/new/bieu-dien-trung-tam-anh-ngu.webp',
    description: 'Màn trình diễn ảo thuật tại trung tâm anh ngữ, mang lại niềm vui cho học viên.'
  },
  {
    id: 18,
    type: 'photo',
    title: 'Biểu Diễn Vincom - 2',
    category: 'Sân Khấu',
    date: '25 Tháng 9, 2024',
    duration: '5 phút',
    thumbnail: '/images/new/bieu-dien-vincom - 2.webp',
    fullSize: '/images/new/bieu-dien-vincom - 2.webp',
    description: 'Màn trình diễn ảo thuật tại Vincom lần 2, tiếp tục mang lại niềm vui cho khán giả.'
  },
  {
    id: 19,
    type: 'photo',
    title: 'Không Gian Sân Khấu Anh Ngữ',
    category: 'Sân Khấu',
    date: '20 Tháng 9, 2024',
    duration: '3 phút',
    thumbnail: '/images/new/khan-gian-san-khau-anh-ngu.webp',
    fullSize: '/images/new/khan-gian-san-khau-anh-ngu.webp',
    description: 'Không gian sân khấu tại trung tâm anh ngữ, nơi diễn ra các màn trình diễn ảo thuật.'
  },
  {
    id: 20,
    type: 'photo',
    title: 'Show Công Ty',
    category: 'Sân Khấu',
    date: '15 Tháng 9, 2024',
    duration: '6 phút',
    thumbnail: '/images/new/show-cong-ty.webp',
    fullSize: '/images/new/show-cong-ty.webp',
    description: 'Show ảo thuật dành cho công ty, tạo ra những khoảnh khắc vui tươi cho nhân viên.'
  },
  {
    id: 21,
    type: 'photo',
    title: 'Ảo Thuật Bồ Câu',
    category: 'Gần',
    date: '10 Tháng 9, 2024',
    duration: '4 phút',
    thumbnail: '/images/new/ao-thuat-bo-cau.webp',
    fullSize: '/images/new/ao-thuat-bo-cau.webp',
    description: 'Màn trình diễn ảo thuật với bồ câu, tạo ra những khoảnh khắc đầy ấn tượng và bất ngờ.'
  },
  {
    id: 22,
    type: 'photo',
    title: 'Ảo Thuật Giao Lưu',
    category: 'Gần',
    date: '5 Tháng 9, 2024',
    duration: '3 phút',
    thumbnail: '/images/new/ao-thuat-giao-luu.webp',
    fullSize: '/images/new/ao-thuat-giao-luu.webp',
    description: 'Màn trình diễn ảo thuật giao lưu, tạo ra sự tương tác thú vị với khán giả.'
  },
  {
    id: 23,
    type: 'photo',
    title: 'Ảo Thuật Mạo Hiểm',
    category: 'Sân Khấu',
    date: '1 Tháng 9, 2024',
    duration: '7 phút',
    thumbnail: '/images/new/ao-thuat-mao-hiem.webp',
    fullSize: '/images/new/ao-thuat-mao-hiem.webp',
    description: 'Màn trình diễn ảo thuật mạo hiểm, tạo ra những khoảnh khắc đầy kịch tính và hồi hộp.'
  },
  {
    id: 24,
    type: 'photo',
    title: 'Báo Từ Thiện',
    category: 'Sân Khấu',
    date: '25 Tháng 8, 2024',
    duration: '5 phút',
    thumbnail: '/images/new/bai-bao-tu-thien.webp',
    fullSize: '/images/new/bai-bao-tu-thien.webp',
    description: 'Màn trình diễn ảo thuật từ thiện, mang lại niềm vui và ý nghĩa cho cộng đồng.'
  },
]

// Computed properties
const filteredItems = computed(() => {
  let filtered = galleryItems
  
  if (activeFilter.value === 'photos') {
    filtered = galleryItems.filter(item => item.type === 'photo')
  } else if (activeFilter.value === 'videos') {
    filtered = galleryItems.filter(item => item.type === 'video')
  } else if (activeFilter.value === 'close-up') {
    filtered = galleryItems.filter(item => item.category === 'Gần')
  } else if (activeFilter.value === 'stage') {
    filtered = galleryItems.filter(item => item.category === 'Sân Khấu')
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
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
