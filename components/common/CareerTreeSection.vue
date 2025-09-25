<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Cây Phát Triển <span class="text-orange-500">Nghề Nghiệp</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Hành trình từ những dòng code đầu tiên đến vị trí Senior Software Engineer
        </p>
      </div>

        <!-- Career Tree -->
        <div class="relative">
          <!-- Tree Trunk -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
          
          <!-- Career Timeline Header -->
          <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Quá Trình Làm Việc</h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Hành trình phát triển từ những dòng code đầu tiên đến vị trí Senior Software Engineer
            </p>
          </div>
          
          <!-- Career Nodes -->
          <div class="space-y-16">
          <!-- Samsung SDS - Top Level -->
          <div class="relative flex justify-center">
            <div class="bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-6 max-w-md transform hover:scale-105 transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">SAMSUNG</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Senior Software Engineer</h3>
                  <p class="text-orange-500 font-semibold">Samsung SDS</p>
                  <p class="text-gray-600 text-sm">Sep 2025 - Present</p>
                </div>
              </div>
                <p class="text-gray-700 text-sm mb-4">
                  Dẫn dắt team phát triển dự án enterprise, tối ưu hóa hiệu suất và đào tạo junior developers.
                </p>
                <div class="bg-orange-50 p-3 rounded-lg mb-4">
                  <p class="text-xs text-gray-600 mb-1"><strong>Thành tựu:</strong></p>
                  <ul class="text-xs text-gray-600 space-y-1">
                    <li>• Dẫn dắt team 5+ developers</li>
                    <li>• Tối ưu hiệu suất ứng dụng 40%</li>
                    <li>• Đào tạo 3+ junior developers</li>
                  </ul>
                </div>
              <div class="flex flex-wrap gap-2">
                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Enterprise</span>
              </div>
            </div>
          </div>

          <!-- Branch to Permate -->
          <div class="relative flex justify-between items-center">
            <!-- Left Branch -->
            <div class="w-1/2 flex justify-end pr-8">
              <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-6 max-w-sm transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">PERMATE</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Frontend Developer</h3>
                    <p class="text-blue-500 font-semibold text-sm">Permate Global</p>
                    <p class="text-gray-600 text-xs">May 2023 - Sep 2025</p>
                  </div>
                </div>
                <p class="text-gray-700 text-sm mb-3">
                  Phát triển ứng dụng web hiện đại với Vue.js và Nuxt.js.
                </p>
                <div class="bg-blue-50 p-3 rounded-lg mb-3">
                  <p class="text-xs text-gray-600 mb-1"><strong>Dự án nổi bật:</strong></p>
                  <ul class="text-xs text-gray-600 space-y-1">
                    <li>• E-commerce platform cho khách hàng EU</li>
                    <li>• Tăng conversion rate 25%</li>
                    <li>• Tích hợp payment gateway</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Vue.js</span>
                  <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Nuxt.js</span>
                </div>
              </div>
            </div>

            <!-- Center Connection -->
            <div class="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

            <!-- Right Branch -->
            <div class="w-1/2 pl-8">
              <div class="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-6 max-w-sm transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">PERMATE</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Software Developer</h3>
                    <p class="text-purple-500 font-semibold text-sm">Permate Global</p>
                    <p class="text-gray-600 text-xs">May 2023 - Sep 2024</p>
                  </div>
                </div>
                <p class="text-gray-700 text-sm mb-3">
                  Phát triển dự án outsourcing với khách hàng quốc tế.
                </p>
                <div class="bg-purple-50 p-3 rounded-lg mb-3">
                  <p class="text-xs text-gray-600 mb-1"><strong>Kinh nghiệm:</strong></p>
                  <ul class="text-xs text-gray-600 space-y-1">
                    <li>• Làm việc với team quốc tế</li>
                    <li>• Phát triển 10+ dự án</li>
                    <li>• Sử dụng Agile/Scrum</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Programme Design</span>
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Global Client</span>
                </div>
              </div>
            </div>
          </div>

          <!-- FPT Branch -->
          <div class="relative flex justify-between items-center">
            <!-- Left Branch -->
            <div class="w-1/2 flex justify-end pr-8">
              <div class="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-6 max-w-sm transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">FPT</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Software Developer</h3>
                    <p class="text-green-500 font-semibold text-sm">FPT Software</p>
                    <p class="text-gray-600 text-xs">Sep 2021 - May 2023</p>
                  </div>
                </div>
                <p class="text-gray-700 text-sm mb-3">
                  Bắt đầu hành trình chuyên nghiệp với dự án outsourcing.
                </p>
                <div class="bg-green-50 p-3 rounded-lg mb-3">
                  <p class="text-xs text-gray-600 mb-1"><strong>Học hỏi:</strong></p>
                  <ul class="text-xs text-gray-600 space-y-1">
                    <li>• Làm việc với Java, Spring Boot</li>
                    <li>• Học quy trình phát triển phần mềm</li>
                    <li>• Tham gia 5+ dự án</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Project Design</span>
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">API Development</span>
                </div>
              </div>
            </div>

            <!-- Center Connection -->
            <div class="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

            <!-- Right Branch -->
            <div class="w-1/2 pl-8">
              <div class="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 p-6 max-w-sm transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">FPT</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Lecturer</h3>
                    <p class="text-indigo-500 font-semibold text-sm">FPT Polytechnic</p>
                    <p class="text-gray-600 text-xs">Aug 2022 - Mar 2023</p>
                  </div>
                </div>
                <p class="text-gray-700 text-sm mb-3">
                  Chia sẻ kiến thức với sinh viên, giảng dạy HTML/CSS và JavaScript.
                </p>
                <div class="bg-indigo-50 p-3 rounded-lg mb-3">
                  <p class="text-xs text-gray-600 mb-1"><strong>Giảng dạy:</strong></p>
                  <ul class="text-xs text-gray-600 space-y-1">
                    <li>• Đào tạo 50+ sinh viên</li>
                    <li>• Tạo bài giảng tương tác</li>
                    <li>• Hướng dẫn dự án thực tế</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-1">
                  <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">HTML/CSS</span>
                  <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Foundation - HUONG VIET -->
          <div class="relative flex justify-center">
            <div class="bg-white rounded-2xl shadow-xl border-2 border-pink-200 p-6 max-w-md transform hover:scale-105 transition-all duration-300">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">HVT</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Vue.js Web Developer</h3>
                  <p class="text-pink-500 font-semibold">HUONG VIET GROUP</p>
                  <p class="text-gray-600 text-sm">Mar 2021 - Sep 2021</p>
                </div>
              </div>
              <p class="text-gray-700 text-sm mb-4">
                Bước đầu tiên trong sự nghiệp lập trình, phát triển dự án sản phẩm và outsourcing với Vue.js.
              </p>
              <div class="bg-pink-50 p-3 rounded-lg mb-4">
                <p class="text-xs text-gray-600 mb-1"><strong>Khởi đầu:</strong></p>
                <ul class="text-xs text-gray-600 space-y-1">
                  <li>• Học Vue.js từ cơ bản</li>
                  <li>• Phát triển 3+ dự án web</li>
                  <li>• Làm việc với team nhỏ</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Web Development</span>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">First Steps</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Connection Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
          <!-- Main trunk line -->
          <line x1="400" y1="0" x2="400" y2="600" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
          
          <!-- Branch lines -->
          <line x1="400" y1="150" x2="200" y2="250" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
          <line x1="400" y1="150" x2="600" y2="250" stroke="#8b5cf6" stroke-width="3" stroke-linecap="round"/>
          <line x1="400" y1="350" x2="200" y2="450" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
          <line x1="400" y1="350" x2="600" y2="450" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Programming Skills Section -->
      <div class="mt-16 bg-white rounded-2xl shadow-xl p-8">
        <div class="flex items-start mb-6">
          <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Lập Trình</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              Bắt đầu với HTML/CSS cơ bản, tôi đã phát triển qua nhiều ngôn ngữ lập trình như JavaScript, Python, PHP, 
              và các framework như Vue.js, React, Laravel. Tôi đam mê tạo ra những ứng dụng web hiện đại và trải nghiệm người dùng tốt nhất.
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h4 class="text-lg font-semibold text-gray-900">Frontend Development</h4>
            </div>
            <p class="text-gray-600 text-sm mb-3">Vue.js, React, HTML/CSS, JavaScript</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Vue.js</span>
              <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">React</span>
              <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Nuxt.js</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h4 class="text-lg font-semibold text-gray-900">Backend Development</h4>
            </div>
            <p class="text-gray-600 text-sm mb-3">Node.js, PHP, Python, Database</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">PHP</span>
              <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">Python</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h4 class="text-lg font-semibold text-gray-900">Mobile Development</h4>
            </div>
            <p class="text-gray-600 text-sm mb-3">React Native, Flutter, Cross-platform</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs">React Native</span>
              <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs">Flutter</span>
              <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs">Mobile</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Career Summary Timeline -->
      <div class="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Tóm Tắt Hành Trình</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">2021</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Khởi Đầu</h4>
            <p class="text-sm text-gray-600">Vue.js Developer<br/>HUONG VIET GROUP</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">2021-2023</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Phát Triển</h4>
            <p class="text-sm text-gray-600">Software Developer<br/>FPT Software</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">2023-2025</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Chuyên Sâu</h4>
            <p class="text-sm text-gray-600">Frontend Developer<br/>Permate Global</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">2025+</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Lãnh Đạo</h4>
            <p class="text-sm text-gray-600">Senior Engineer<br/>Samsung SDS</p>
          </div>
        </div>
      </div>

      <!-- Growth Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="text-center p-6 bg-white rounded-xl shadow-lg">
          <div class="text-3xl font-bold text-orange-500 mb-2">4+</div>
          <div class="text-gray-700 font-medium">Năm Phát Triển</div>
          <div class="text-gray-500 text-sm">2021 - 2025</div>
        </div>
        <div class="text-center p-6 bg-white rounded-xl shadow-lg">
          <div class="text-3xl font-bold text-blue-500 mb-2">6</div>
          <div class="text-gray-700 font-medium">Vị Trí Đã Trải Qua</div>
          <div class="text-gray-500 text-sm">Từ Junior đến Senior</div>
        </div>
        <div class="text-center p-6 bg-white rounded-xl shadow-lg">
          <div class="text-3xl font-bold text-green-500 mb-2">50+</div>
          <div class="text-gray-700 font-medium">Dự Án Hoàn Thành</div>
          <div class="text-gray-500 text-sm">Web, Mobile, Enterprise</div>
        </div>
        <div class="text-center p-6 bg-white rounded-xl shadow-lg">
          <div class="text-3xl font-bold text-purple-500 mb-2">3</div>
          <div class="text-gray-700 font-medium">Lĩnh Vực Chuyên Môn</div>
          <div class="text-gray-500 text-sm">Frontend, Backend, Teaching</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic if needed
</script>
