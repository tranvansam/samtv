<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      <!-- Background -->
      <div class="fixed inset-0" style="z-index: -1">
        <img 
          src="/images/ab-bg.webp" 
          alt="Hero Background"
          decoding="async"
          class="w-full h-full object-cover object-[75%_center] md:object-center"
        />
        <div class="absolute inset-0 bg-black/80"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl w-[100%] mx-auto px-8 mb-16">
        <div class="text-left max-w-4xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 mt-16">
            <span
              class="text-white block text-2xl md:text-2xl lg:text-3xl font-medium mb-2"
            >
              Xin chào, tôi là
            </span>
            <span class="text-orange-500 block leading-tight uppercase">
              Trần Sâm
            </span>
            <span
              class="text-white block text-xl md:text-2xl lg:text-3xl font-medium mt-4"
            >
              Lập Trình Viên & Ảo Thuật Gia
            </span>
          </h1>
          
          <div class="space-y-6 mb-12">
            <p
              class="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            >
              Với hơn 6 năm kinh nghiệm trong lập trình và gần 10 năm trong nghề
              ảo thuật, tôi kết hợp sự sáng tạo của nghệ thuật với logic của
              công nghệ để tạo ra những trải nghiệm độc đáo.
            </p>
            
            <!-- CTA Button -->
            <div class="flex flex-col sm:flex-row gap-4 items-start">
              <button 
                @click="scrollToAbout"
                class="group relative inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="relative z-10 flex items-center">
                  Xem Thêm
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about-me" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Về <span class="text-orange-500">Tôi</span>
            </h2>
            <!-- Origin Story -->
            <div
              class="mb-6 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-500"
            >
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                 Xuất Thân Từ Miền Quê
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Tôi sinh ra trong một gia đình nhà nông ở miền quê Quảng Nam. Có
                thể thiếu về tiền bạc, nhưng gia đình tôi luôn giàu tình cảm và
                tình yêu thương. Chính tình yêu thương vô điều kiện của gia đình
                đã nuôi dưỡng trong tôi ý chí mạnh mẽ và nghị lực vượt khó.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Từ những ngày thơ ấu, tôi đã học được rằng
                <strong>"không gì là không thể"</strong> - một triết lý sống đã
                theo tôi suốt hành trình từ miền quê đến thành phố, từ sinh viên
                nghèo đến lập trình viên chuyên nghiệp.
              </p>
            </div>

            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Tôi là Trần Sâm, một lập trình viên đam mê công nghệ với hơn 6 năm
              kinh nghiệm trong việc phát triển các ứng dụng web và mobile. Đồng
              thời, tôi cũng là một ảo thuật gia với gần 10 năm trong nghề, mang
              đến những màn trình diễn đầy bất ngờ và thú vị.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Sự kết hợp giữa logic lập trình và nghệ thuật ảo thuật giúp tôi có
              cái nhìn độc đáo về việc giải quyết vấn đề và tạo ra những trải
              nghiệm đáng nhớ cho người dùng.
              <strong>Nền tảng vững chắc</strong> từ quê hương đã tạo nên con người tôi - 
              kiên trì, sáng tạo và luôn hướng tới những giá trị chân thật trong công việc.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-6 bg-orange-50 rounded-xl">
                <div class="text-3xl font-bold text-orange-500 mb-2">6+</div>
                <div class="text-gray-700 font-medium">Năm Lập Trình</div>
              </div>
              <div class="text-center p-6 bg-blue-50 rounded-xl">
                <div class="text-3xl font-bold text-blue-500 mb-2">10+</div>
                <div class="text-gray-700 font-medium">Năm Ảo Thuật</div>
              </div>
            </div>
          </div>
          
          <!-- Image -->
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/ab-1.webp" 
                alt="Lập trình viên và ảo thuật gia"
                loading="lazy"
                decoding="async"
                class="w-full h-[600px] md:h-[700px] object-cover object-center transform transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Development Journey -->
    <section
      class="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
                circle at 25% 25%,
                #f97316 0%,
                transparent 50%
              ),
              radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%);
          "
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Hành Trình
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
              >Của Tôi</span
            >
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Câu chuyện về hành trình từ cậu bé nhà quê đến lập trình viên chuyên nghiệp và ảo thuật gia tài năng.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:items-stretch">
          <div
              class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 h-full flex flex-col"
            >
              <!-- Gradient border effect -->
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div class="relative z-10">
                <div class="flex items-center mb-8">
                  <div class="relative">
                    <div
                      class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-orange-500/25"
                    >
                      <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                </svg>
              </div>
                    <!-- Floating particles effect -->
                    <div
                      class="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"
                    ></div>
                    <div
                      class="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                      style="animation-delay: 0.5s"
                    ></div>
                  </div>
                  <div>
                    <h3 class="text-3xl font-bold text-white mb-2">
                      Lập Trình
                    </h3>
                    <p class="text-gray-300">6+ năm kinh nghiệm</p>
                  </div>
            </div>
            
            <!-- Education -->
                <div
                  class="mb-8 p-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-400/30 backdrop-blur-sm"
                >
                  <div class="flex items-center mb-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                  </svg>
                </div>
                    <div>
                      <h4 class="text-xl font-bold text-white">
                        Đại Học Khoa Học Huế
                      </h4>
                      <p class="text-blue-200 text-sm">2014 - 2019</p>
              </div>
              </div>
                  <p class="text-white/90 text-base mb-2">
                    Kỹ sư Công nghệ Thông tin
                  </p>
                  <p class="text-blue-200 text-sm">Tốt nghiệp loại Khá</p>
            </div>

            <!-- Career Timeline -->
                <div class="space-y-6">
              <!-- Samsung SDS -->
                  <div class="relative group">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div
                          class="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50"
                        ></div>
                        <div
                          class="w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent mt-2"
                        ></div>
                </div>
                      <div
                        class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <h4 class="text-lg font-bold text-white">
                            Samsung SDS
                          </h4>
                          <span class="text-orange-300 text-sm font-medium"
                            >Sep 2025 - Present</span
                          >
                        </div>
                        <p class="text-orange-200 font-semibold mb-2">
                          Senior Software Engineer
                        </p>
                        <p class="text-gray-300 text-sm">
                          Dẫn dắt team phát triển dự án enterprise
                        </p>
                      </div>
                </div>
              </div>

              <!-- Permate Global -->
                  <div class="relative group">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div
                          class="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"
                        ></div>
                        <div
                          class="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent mt-2"
                        ></div>
                </div>
                      <div
                        class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <h4 class="text-lg font-bold text-white">
                            Permate Global
                          </h4>
                          <span class="text-blue-300 text-sm font-medium"
                            >May 2023 - Aug 2025</span
                          >
                        </div>
                        <p class="text-blue-200 font-semibold mb-2">
                          Software Developer
                        </p>
                        <p class="text-gray-300 text-sm">
                          Phát triển UI cho dự án outsourcing, dẫn dắt team
                          frontend
                        </p>
                      </div>
                </div>
              </div>

              <!-- FPT Software -->
                  <div class="relative group">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div
                          class="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/50"
                        ></div>
                        <div
                          class="w-0.5 h-16 bg-gradient-to-b from-green-500 to-transparent mt-2"
                        ></div>
                </div>
                      <div
                        class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <h4 class="text-lg font-bold text-white">
                            FPT Software
                          </h4>
                          <span class="text-green-300 text-sm font-medium"
                            >Sep 2021 - May 2023</span
                          >
                        </div>
                        <p class="text-green-200 font-semibold mb-2">
                          Software Developer
                        </p>
                        <p class="text-gray-300 text-sm">
                          Dự án outsourcing cho khách hàng Hàn Quốc, Nhật Bản
                        </p>
                      </div>
                </div>
              </div>

              <!-- Huong Viet Group -->
                  <div class="relative group">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div
                          class="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
                        ></div>
                        <div
                          class="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent mt-2"
                        ></div>
                </div>
                      <div
                        class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <h4 class="text-lg font-bold text-white">
                            Huong Viet Group
                          </h4>
                          <span class="text-purple-300 text-sm font-medium"
                            >Jun 2020 - Sep 2023</span
                          >
              </div>
                        <p class="text-purple-200 font-semibold mb-2">
                          Frontend Developer
                        </p>
                        <p class="text-gray-300 text-sm">
                          Phát triển dự án CLS và LISA, giảng dạy tại FPT
                          College
                        </p>
                </div>
              </div>
            </div>

              <!-- PI - Hue Software -->
                  <div class="relative group">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div
                          class="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg shadow-pink-500/50"
                        ></div>
              </div>
                      <div
                        class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <h4 class="text-lg font-bold text-white">
                            PI - Hue Software
                          </h4>
                          <span class="text-pink-300 text-sm font-medium"
                            >Jul 2019 - May 2020</span
                          >
                  </div>
                        <p class="text-pink-200 font-semibold mb-2">
                          Frontend Developer
                        </p>
                        <p class="text-gray-300 text-sm">
                          Phát triển UI components và xử lý business logic
                </p>
                </div>
                  </div>
                </div>
              </div>
              
                <!-- Dự Án Nổi Bật -->
                <div class="mt-8">
                  <div
                    class="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-2xl border border-green-400/30 backdrop-blur-sm"
                  >
                    <h5 class="font-bold text-white mb-4 flex items-center">
                      <span class="text-2xl mr-3">💼</span>
                      Dự Án Nổi Bật
                    </h5>
                    <ul class="text-white/90 space-y-2">
                      <li class="flex items-start">
                        <span
                          class="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        ></span>
                        <span>Dự án product enterprise cho Samsung SDS</span>
                      </li>
                      <li class="flex items-start">
                        <span
                          class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        ></span>
                        <span
                          >E-commerce platform cho khách hàng EU (Permate
                          Global)</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span
                          class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        ></span>
                        <span
                          >Dự án outsourcing cho LG Group (FPT Software)</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span
                          class="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        ></span>
                        <span
                          >Hệ thống quản lý CLS và LISA (Huong Viet Group)</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span
                          class="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        ></span>
                        <span>20+ dự án web và mobile đã hoàn thành</span>
                      </li>
                </ul>
              </div>
            </div>
              
          </div>
            </div>
          <!-- Programming Journey -->
          <div class="group relative w-full h-full">
              <!-- Glass morphism card -->
              <div
                class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 h-full flex flex-col"
              >
                <!-- Gradient border effect -->
                <div
                  class="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <div class="relative z-10">
                  <div class="flex items-center mb-8">
                    <div class="relative">
                      <div
                        class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-purple-500/25"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                </svg>
              </div>
                      <!-- Floating particles effect -->
                      <div
                        class="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"
                      ></div>
                      <div
                        class="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"
                        style="animation-delay: 0.5s"
                      ></div>
                    </div>
                    <div>
                      <h3 class="text-3xl font-bold text-white mb-2">
                        Ảo Thuật
                      </h3>
                      <p class="text-gray-300">10+ năm kinh nghiệm</p>
                    </div>
            </div>
            
            <!-- Origin Story -->
                  <div
                    class="mb-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 backdrop-blur-sm"
                  >
                    <h4
                      class="text-xl font-bold text-white mb-4 flex items-center"
                    >
                      <span class="text-2xl mr-3">🎭</span>
                      Cơ Duyên Đến Với Ảo Thuật
                    </h4>
                    <p class="text-white/90 leading-relaxed">
                      Từ năm nhất đại học, tôi đã tự làm thêm để trang trải cuộc
                      sống sinh viên. Cơ duyên đến khi tôi làm thêm tại quán
                      nhậu, gặp anh làm ảo thuật kẹo kéo biểu diễn. Tôi thấy
                      thích và nhận ra nó cũng mang thu nhập khá. Với ý chí
                      "không gì là không thể", tôi đã tự học và bắt đầu hành
                      trình ảo thuật.
              </p>
            </div>

            <!-- Magic Journey -->
                  <div class="space-y-6">
              <!-- Current Status -->
                    <div class="relative group">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                          <div
                            class="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
                          ></div>
                          <div
                            class="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent mt-2"
                          ></div>
                </div>
                        <div
                          class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <div class="flex items-center justify-between mb-3">
                            <h4 class="text-lg font-bold text-white">
                              Ảo Thuật Gia Chuyên Nghiệp
                            </h4>
                            <span class="text-purple-300 text-sm font-medium"
                              >2015 - Present</span
                            >
                          </div>
                          <p class="text-purple-200 font-semibold mb-2">
                            Gần 10 năm kinh nghiệm
                          </p>
                          <p class="text-gray-300 text-sm">
                            Khởi điểm: Ban ngày học, ban đêm đi diễn bán kẹo kéo
                          </p>
                        </div>
                </div>
              </div>

              <!-- Breakthrough -->
                    <div class="relative group">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                          <div
                            class="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg shadow-pink-500/50"
                          ></div>
                          <div
                            class="w-0.5 h-16 bg-gradient-to-b from-pink-500 to-transparent mt-2"
                          ></div>
                </div>
                        <div
                          class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <div class="flex items-center justify-between mb-3">
                            <h4 class="text-lg font-bold text-white">
                              Bước Ngoặt Lớn
                            </h4>
                            <span class="text-pink-300 text-sm font-medium"
                              >2016-2017</span
                            >
                          </div>
                          <p class="text-pink-200 font-semibold mb-2">
                            Được bầu show nhận và đưa đi các show diễn
                          </p>
                          <p class="text-gray-300 text-sm">
                            Từ diễn nhỏ đến các show lớn, quen biết nhiều người
                          </p>
                        </div>
                </div>
              </div>

              <!-- Continuous Learning -->
                    <div class="relative group">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                          <div
                            class="w-4 h-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg shadow-indigo-500/50"
                          ></div>
                </div>
                        <div
                          class="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <div class="flex items-center justify-between mb-3">
                            <h4 class="text-lg font-bold text-white">
                              Nâng Cao Kỹ Năng
                            </h4>
                            <span class="text-indigo-300 text-sm font-medium"
                              >2017 - Present</span
                            >
                          </div>
                          <p class="text-indigo-200 font-semibold mb-2">
                            Luôn luôn học hỏi và phát triển
                          </p>
                          <p class="text-gray-300 text-sm">
                            Mang đến niềm vui cho mọi người qua từng màn trình
                            diễn
                          </p>
                        </div>
                </div>
              </div>
            </div>

            <!-- Philosophy -->
                  <div
                    class="mt-8 p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-400/30 backdrop-blur-sm"
                  >
                    <h4
                      class="text-xl font-bold text-white mb-4 flex items-center"
                    >
                      <span class="text-2xl mr-3">💪</span>
                      Triết Lý Sống
                    </h4>
                    <p class="text-white/90 leading-relaxed">
                      "Ảo thuật, lập trình hay vấn đề gì trong cuộc sống khó
                      khăn mấy, với tôi không bao giờ có 2 từ 'bỏ cuộc'. Ý chí
                      và quyết tâm là chìa khóa để vượt qua mọi thử thách."
              </p>
            </div>

            <!-- Magic Skills -->
                  <div class="mt-8">
                    <h4
                      class="text-xl font-bold text-white mb-6 flex items-center"
                    >
                      <span
                        class="w-2 h-2 bg-purple-400 rounded-full mr-3"
                      ></span>
                      Kỹ Năng Ảo Thuật
                    </h4>
                    <div class="flex flex-wrap gap-3">
                      <span
                        class="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl text-sm font-medium border border-purple-400/30"
                        >Close-up Magic</span
                      >
                      <span
                        class="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-xl text-sm font-medium border border-pink-400/30"
                        >Stage Magic</span
                      >
                      <span
                        class="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-xl text-sm font-medium border border-indigo-400/30"
                        >Mentalism</span
                      >
                      <span
                        class="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-xl text-sm font-medium border border-orange-400/30"
                        >Card Tricks</span
                      >
                      <span
                        class="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-xl text-sm font-medium border border-blue-400/30"
                        >Coin Magic</span
                      >
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Stats Section -->
    <PersonalStatsSection />

    <!-- Magic Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Dịch Vụ <span class="text-orange-500">Ảo Thuật</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Tôi cung cấp các gói dịch vụ ảo thuật đa dạng, phù hợp với mọi nhu
            cầu và sự kiện.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Close-up Magic -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Ảo Thuật Gần
              </h3>
              <p class="text-gray-600">Ảo thuật gần, tương tác trực tiếp</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Thời gian: 10-60 phút</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Số lượng: 10-50 người</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span class="text-gray-700"
                  >Phù hợp: Tiệc tùng, sự kiện nhỏ</span
                >
              </li>
            </ul>
            <div class="text-center">
            <span class="text-2xl font-bold text-orange-500">Từ 500.000đ</span>
          </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=close-up-magic"
                class="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Đặt Show
              </NuxtLink>
            </div>
          </div>

          <!-- Stage Magic -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Ảo Thuật Sân Khấu</h3>
              <p class="text-gray-600">Ảo thuật sân khấu, biểu diễn lớn</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Thời gian: 10-60 phút</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Số lượng: 50-1000+ người</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700"
                  >Phù hợp: Sự kiện lớn, hội nghị</span
                >
              </li>
            </ul>
            <div class="text-center">
              <span class="text-2xl font-bold text-blue-500">Từ 1.000.000đ</span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=stage-magic"
                class="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Đặt Show
              </NuxtLink>
            </div>
          </div>

          <!-- Workshop -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Khóa Học Ảo Thuật</h3>
              <p class="text-gray-600">Đào tạo ảo thuật cơ bản</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Thời gian: 2-4 giờ</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Số lượng: 5-20 người</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700"
                  >Phù hợp: Team building, học tập</span
                >
              </li>
            </ul>
            <div class="text-center">
              <span class="text-2xl font-bold text-purple-500">Từ 200.000đ</span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=workshop"
                class="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Đặt Show
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Web Development Services Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Dịch Vụ <span class="text-orange-500">Lập Trình Web</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Với hơn 6 năm kinh nghiệm trong lập trình, tôi cung cấp các dịch vụ phát triển web chuyên nghiệp và hiện đại.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend Development -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-gray-200"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Frontend Development
              </h3>
              <p class="text-gray-600">Giao diện người dùng hiện đại</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700">React, Vue.js, Nuxt.js</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Responsive Design</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-gray-700">UI/UX Optimization</span>
              </li>
            </ul>
            <div class="text-center">
              <span class="text-2xl font-bold text-blue-500">Thương Lượng</span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=frontend"
                class="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Liên Hệ
              </NuxtLink>
            </div>
          </div>

          <!-- Backend Development -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-gray-200"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Backend Development</h3>
              <p class="text-gray-600">Hệ thống xử lý dữ liệu</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Node.js, Python, PHP</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Database Design</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">API Development</span>
              </li>
            </ul>
            <div class="text-center">
              <span class="text-2xl font-bold text-green-500">Thương Lượng</span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=backend"
                class="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Liên Hệ
              </NuxtLink>
            </div>
          </div>

          <!-- Full Stack Development -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-gray-200"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Full Stack Development</h3>
              <p class="text-gray-600">Giải pháp web hoàn chỉnh</p>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">End-to-End Solutions</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Cloud Deployment</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Maintenance & Support</span>
              </li>
            </ul>
            <div class="text-center">
              <span class="text-2xl font-bold text-purple-500">Thương Lượng</span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <NuxtLink 
                to="/contact?service=fullstack"
                class="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 transition-colors duration-300 hover:scale-110 transform"
              >
                Liên Hệ
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Gallery Section -->
    <section
      class="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-6">
            Khoảnh Khắc <span class="text-orange-500">Biểu Diễn</span>
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Những màn trình diễn ảo thuật đầy ấn tượng và bất ngờ
          </p>
        </div>


        <!-- Performance Gallery Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <!-- Gallery Items -->
          <div
            v-for="item in featuredGalleryItems"
            :key="item.id"
            :class="[
              'group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer',
              item.type === 'video' ? 'ring-2 ring-orange-400 ring-opacity-50 hover:ring-orange-500 hover:ring-opacity-100 video-highlight video-pulse' : ''
            ]"
            @click="openImageModal(item)"
          >
            <!-- Video Badge -->
            <div v-if="item.type === 'video'" class="absolute top-2 left-2 z-10">
              <div class="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                VIDEO
              </div>
            </div>
            
            <!-- Retro Badge for first video -->
            <div v-if="item.id === 1" class="absolute top-2 right-2 z-10">
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                ⭐ RETRO
              </div>
            </div>
            
            <div class="relative aspect-square">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                loading="lazy"
                decoding="async"
                :class="[
                  'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110',
                  item.type === 'video' ? 'brightness-110 contrast-110' : ''
                ]"
              />
              
              <!-- Video Play Button Overlay -->
              <div v-if="item.type === 'video'" class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                <div class="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <svg class="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <!-- Photo Overlay -->
              <div v-else class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div class="flex items-center gap-2 mb-1">
                <h3 class="text-white font-semibold text-sm line-clamp-2">{{ item.title }}</h3>
                <div v-if="item.type === 'video'" class="flex-shrink-0">
                  <div class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                    🎬
                  </div>
                </div>
              </div>
              <p class="text-gray-300 text-xs">{{ item.category }}</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <p class="text-gray-300 mb-6">
            Muốn xem thêm những màn trình diễn ấn tượng?
          </p>
          <NuxtLink
            to="/gallery"
            class="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            Xem Tất Cả Ảnh & Video
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Liên Hệ <span class="text-orange-500">Với Tôi</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Bạn có dự án lập trình cần hỗ trợ hoặc muốn tổ chức một buổi ảo
            thuật? Hãy liên hệ với tôi để thảo luận!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <div class="space-y-8">
              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6 mt-1"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:transamdhkh@gmail.com"
                    class="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    transamdhkh@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6 mt-1"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    Điện Thoại
                  </h3>
                  <a
                    href="tel:0868354016"
                    class="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    0868354016
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6 mt-1"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    Địa Chỉ
                  </h3>
                  <p class="text-gray-600">Cầu Giấy, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Gửi Tin Nhắn</h3>
            <form class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Họ và Tên
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nhập email của bạn"
                />
              </div>
              
              <div>
                <label
                  for="service"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Dịch Vụ Quan Tâm
                </label>
                <select 
                  id="service" 
                  name="service" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="programming">Lập Trình</option>
                  <option value="close-up">Close-up Magic</option>
                  <option value="stage">Stage Magic</option>
                  <option value="workshop">Workshop</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tin Nhắn
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click="closeImageModal"
    >
      <div class="relative max-w-4xl max-h-[90vh] mx-4" @click.stop>
        <button
          @click="closeImageModal"
          class="fixed top-4 right-4 z-[60] bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <div class="bg-white rounded-xl overflow-hidden">
          <div class="relative">
            <img
              v-if="selectedImage.type === 'photo'"
              :src="selectedImage.fullSize"
              :alt="selectedImage.title"
              loading="lazy"
              decoding="async"
              class="w-full max-h-[70vh] object-cover"
            />
            <iframe
              v-else-if="selectedImage.videoUrl.includes('youtu.be')"
              :src="`https://www.youtube.com/embed/${selectedImage.videoUrl.split('youtu.be/')[1].split('?')[0]}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-[400px] md:h-[500px]"
            ></iframe>
            <video
              v-else
              :src="selectedImage.videoUrl"
              controls
              class="w-full max-h-[70vh] object-cover"
            ></video>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedImage.title }}</h3>
            <p class="text-gray-600 mb-4">{{ selectedImage.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ selectedImage.category }}</span>
              <NuxtLink
                to="/gallery"
                class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Xem Thêm
              </NuxtLink>
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
  title: "Trần Sâm - Lập Trình Viên & Ảo Thuật Gia Chuyên Nghiệp | Dịch Vụ Web & Ảo Thuật",
  meta: [
    {
      name: "description",
      content: "Trần Sâm - Lập trình viên với 6+ năm kinh nghiệm và ảo thuật gia với 10+ năm trong nghề. Dịch vụ lập trình web (Frontend, Backend, Full Stack) và ảo thuật (Close-up, Sân khấu, Workshop). Liên hệ: 0868354016"
    },
    {
      name: "keywords",
      content: "lập trình viên, ảo thuật gia, frontend development, backend development, full stack, ảo thuật gần, ảo thuật sân khấu, workshop ảo thuật, React, Vue.js, Node.js, Python, PHP, Trần Sâm, Hà Nội"
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Trần Sâm" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Trần Sâm - Lập Trình Viên & Ảo Thuật Gia Chuyên Nghiệp" },
    { property: "og:description", content: "Dịch vụ lập trình web và ảo thuật chuyên nghiệp. 6+ năm kinh nghiệm lập trình, 10+ năm ảo thuật. Liên hệ ngay!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://transam.dev" },
    { property: "og:image", content: "https://transam.dev/images/ab-1.webp" },
    { property: "og:site_name", content: "Trần Sâm - Lập Trình & Ảo Thuật" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Trần Sâm - Lập Trình Viên & Ảo Thuật Gia" },
    { name: "twitter:description", content: "Dịch vụ lập trình web và ảo thuật chuyên nghiệp" },
    { name: "twitter:image", content: "https://transam.dev/images/ab-1.webp" },
    { name: "geo.region", content: "VN-HN" },
    { name: "geo.placename", content: "Hà Nội" },
    { name: "geo.position", content: "21.0285;105.8542" },
    { name: "ICBM", content: "21.0285, 105.8542" }
  ],
  link: [
    { rel: "canonical", href: "https://transam.dev" },
    { rel: "alternate", hreflang: "vi", href: "https://transam.dev" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Trần Sâm",
        "jobTitle": "Lập Trình Viên & Ảo Thuật Gia",
        "description": "Lập trình viên với 6+ năm kinh nghiệm và ảo thuật gia với 10+ năm trong nghề",
        "url": "https://transam.dev",
        "image": "https://transam.dev/images/ab-1.webp",
        "telephone": "+840868354016",
        "email": "transamdhkh@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cầu Giấy",
          "addressRegion": "Hà Nội",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://transam.dev"
        ],
        "knowsAbout": [
          "Lập Trình Web",
          "Frontend Development", 
          "Backend Development",
          "Full Stack Development",
          "Ảo Thuật",
          "Close-up Magic",
          "Stage Magic",
          "Mentalism"
        ],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Lập Trình Viên",
            "description": "Phát triển ứng dụng web và mobile",
            "skills": ["React", "Vue.js", "Nuxt.js", "Node.js", "Python", "PHP"]
          },
          {
            "@type": "Occupation", 
            "name": "Ảo Thuật Gia",
            "description": "Biểu diễn và dạy ảo thuật",
            "skills": ["Close-up Magic", "Stage Magic", "Mentalism", "Card Tricks"]
          }
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "Dịch Vụ Lập Trình Web",
            "description": "Frontend, Backend, Full Stack Development",
            "category": "Lập Trình"
          },
          {
            "@type": "Offer", 
            "name": "Dịch Vụ Ảo Thuật",
            "description": "Ảo thuật gần, sân khấu, workshop",
            "category": "Ảo Thuật"
          }
        ]
      })
    }
  ]
});

// Featured gallery items for homepage
const featuredGalleryItems = ref([
  {
    id: 1,
    type: 'video',
    title: 'Video Biểu Diễn Ảo Thuật Retro',
    category: 'Sân Khấu',
    thumbnail: 'https://img.youtube.com/vi/dolMOjWuqcs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/dolMOjWuqcs?si=A5LtrNULLQTywyx4',
    description: 'Video biểu diễn ảo thuật retro đầy ấn tượng, thể hiện tài năng và phong cách độc đáo của ảo thuật gia.'
  },
  {
    id: 2,
    type: 'photo',
    title: 'Biểu Diễn Gần Công Ty',
    category: 'Gần',
    thumbnail: '/images/new/bieu-dien-gan-company.webp',
    fullSize: '/images/new/bieu-dien-gan-company.webp',
    description: 'Màn trình diễn ảo thuật gần với nhân viên công ty, tạo ra những khoảnh khắc đầy bất ngờ và thú vị.'
  },
  {
    id: 3,
    type: 'photo',
    title: 'Biểu Diễn Sân Khấu Hội Trại',
    category: 'Sân Khấu',
    thumbnail: '/images/new/bieu-dien-san-khau-hoi-trai.webp',
    fullSize: '/images/new/bieu-dien-san-khau-hoi-trai.webp',
    description: 'Màn trình diễn ảo thuật sân khấu tại hội trại với đông đảo khán giả, tạo ra không khí sôi động.'
  },
  {
    id: 4,
    type: 'photo',
    title: 'Biểu Diễn Tại Vincom',
    category: 'Sân Khấu',
    thumbnail: '/images/new/bieu-dien-tai-vincom.webp',
    fullSize: '/images/new/bieu-dien-tai-vincom.webp',
    description: 'Màn trình diễn ảo thuật tại trung tâm thương mại Vincom với khán giả đông đảo.'
  },
  {
    id: 5,
    type: 'photo',
    title: 'Biểu Diễn Đám Cưới',
    category: 'Sân Khấu',
    thumbnail: '/images/new/bieu-dien-dam-cuoi.webp',
    fullSize: '/images/new/bieu-dien-dam-cuoi.webp',
    description: 'Màn trình diễn ảo thuật tại đám cưới, mang lại niềm vui cho cô dâu chú rể và khách mời.'
  },
  {
    id: 6,
    type: 'photo',
    title: 'Biểu Diễn Sinh Nhật',
    category: 'Gần',
    thumbnail: '/images/new/bieu-dien-sinh-nhat.webp',
    fullSize: '/images/new/bieu-dien-sinh-nhat.webp',
    description: 'Màn trình diễn ảo thuật tại bữa tiệc sinh nhật, tạo ra những khoảnh khắc đáng nhớ.'
  },
  {
    id: 7,
    type: 'photo',
    title: 'Biểu Diễn Hội Xuân',
    category: 'Sân Khấu',
    thumbnail: '/images/new/bieu-dien-hoi-xuan.webp',
    fullSize: '/images/new/bieu-dien-hoi-xuan.webp',
    description: 'Màn trình diễn ảo thuật tại hội xuân, mang không khí vui tươi cho mọi người.'
  },
  {
    id: 8,
    type: 'photo',
    title: 'Biểu Diễn Halloween',
    category: 'Sân Khấu',
    thumbnail: '/images/new/bieu-dien-halowin.webp',
    fullSize: '/images/new/bieu-dien-halowin.webp',
    description: 'Màn trình diễn ảo thuật trong không khí Halloween, tạo ra những bất ngờ thú vị.'
  }
])

// Modal state
const selectedImage = ref(null)

// Methods
const openImageModal = (item) => {
  selectedImage.value = item
}

const closeImageModal = () => {
  selectedImage.value = null
}

// Scroll to about section
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-me');
  if (aboutSection) {
    aboutSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Video highlight effects */
.video-highlight {
  position: relative;
  overflow: hidden;
}

.video-highlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s infinite;
  z-index: 1;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.video-pulse {
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 5px rgba(249, 115, 22, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.8), 0 0 30px rgba(249, 115, 22, 0.6);
  }
}
</style>

