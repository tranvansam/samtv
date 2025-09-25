<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">      <!-- FAQ Categories -->
      <div class="space-y-12">
        <div v-for="(category, categoryIndex) in faqData" :key="categoryIndex" class="max-w-7xl mx-auto">
          <!-- Category Title -->
          <h3 class="text-2xl md:text-3xl font-bold text-black mb-8 text-left">
            {{ category.title }}
          </h3>

          <!-- FAQ Items -->
          <div class="space-y-4">
            <div 
              v-for="(item, itemIndex) in category.items" 
              :key="itemIndex"
              class="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              :class="{ 'ring-2 ring-orange-500': item.isOpen }"
            >
              <!-- Question Header -->
              <button
                @click="toggleFaq(categoryIndex, itemIndex)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                :class="{ 'bg-orange-500 text-white hover:bg-orange-600': item.isOpen, 'bg-white text-black': !item.isOpen }"
              >
                <h4 class="text-lg font-semibold pr-4">
                  {{ item.question }}
                </h4>
                <div class="flex-shrink-0">
                  <svg 
                    class="w-6 h-6 transition-transform duration-300"
                    :class="{ 'rotate-180': item.isOpen }"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <!-- Answer Content -->
              <div 
                v-show="item.isOpen"
                class="px-6 py-4 bg-gray-50 text-gray-700"
              >
                <div 
                  class="prose max-w-none"
                  v-html="item.answer"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// FAQ Data Structure
const faqData = ref([
  {
    title: 'CÂU HỎI CHUNG',
    items: [
      {
        question: 'Làm thế nào để liên hệ với bạn?',
        answer: 'Bạn có thể liên hệ với tôi qua:<br><br>• <strong>Email:</strong> <a href="mailto:transamdhkh@gmail.com" class="text-orange-400 hover:text-orange-300 underline">transamdhkh@gmail.com</a><br>• <strong>Điện thoại:</strong> <a href="tel:0868354016" class="text-orange-400 hover:text-orange-300 underline">0868354016</a><br>• <strong>Địa chỉ:</strong> Cầu Giấy, Hà Nội<br><br>Hoặc sử dụng form liên hệ trên trang web để gửi tin nhắn trực tiếp.',
        isOpen: true
      },
      {
        question: 'Bạn có kinh nghiệm gì trong lập trình?',
        answer: 'Tôi có hơn 6 năm kinh nghiệm lập trình với các công nghệ:<br><br>• <strong>Frontend:</strong> Vue.js, React, HTML/CSS, JavaScript<br>• <strong>Backend:</strong> Node.js, Python, PHP<br>• <strong>Database:</strong> MySQL, MongoDB, PostgreSQL<br>• <strong>Mobile:</strong> React Native, Flutter<br>• <strong>Cloud:</strong> AWS, Vercel, Heroku<br><br>Tôi đã tham gia hơn 20+ dự án từ website đơn giản đến ứng dụng phức tạp.',
        isOpen: false
      },
      {
        question: 'Bạn đã học ảo thuật từ khi nào?',
        answer: 'Tôi bắt đầu học ảo thuật từ năm 2014, đã có gần 10 năm kinh nghiệm:<br><br>• <strong>Close-up Magic:</strong> Ảo thuật gần, tương tác trực tiếp<br>• <strong>Stage Magic:</strong> Biểu diễn sân khấu lớn<br>• <strong>Mentalism:</strong> Đọc suy nghĩ, dự đoán<br>• <strong>Card Tricks:</strong> Ảo thuật bài chuyên nghiệp<br>• <strong>Coin Magic:</strong> Ảo thuật xu, đồng xu<br><br>Đã biểu diễn hơn 500+ show tại nhiều sự kiện khác nhau.',
        isOpen: false
      },
      {
        question: 'Bạn có dạy ảo thuật không?',
        answer: 'Có, tôi cung cấp khóa học ảo thuật cho mọi lứa tuổi:<br><br>• <strong>Khóa học cơ bản:</strong> Ảo thuật đơn giản cho người mới bắt đầu<br>• <strong>Khóa học nâng cao:</strong> Kỹ thuật chuyên nghiệp<br>• <strong>Workshop nhóm:</strong> Từ 5-20 người<br>• <strong>Dạy 1-1:</strong> Học riêng với giáo viên<br>• <strong>Thời gian linh hoạt:</strong> Theo lịch của học viên<br><br>Phù hợp cho sự kiện team building, tiệc tùng, hoặc học cá nhân.',
        isOpen: false
      },
      {
        question: 'Chi phí dịch vụ của bạn như thế nào?',
        answer: 'Tôi có bảng giá linh hoạt tùy theo nhu cầu:<br><br>• <strong>Ảo Thuật Gần:</strong> Từ 500.000đ (10-60 phút)<br>• <strong>Ảo Thuật Sân Khấu:</strong> Từ 1.000.000đ (10-60 phút)<br>• <strong>Khóa Học Ảo Thuật:</strong> Từ 200.000đ (2-4 giờ)<br>• <strong>Dịch Vụ Lập Trình:</strong> Thỏa thuận theo dự án<br>• <strong>Gói Combo:</strong> Giảm giá khi đặt nhiều dịch vụ<br><br>Liên hệ để được báo giá chi tiết và tư vấn miễn phí.',
        isOpen: false
      },
      {
        question: 'Bạn có thể biểu diễn ở đâu?',
        answer: 'Tôi có thể biểu diễn tại nhiều địa điểm khác nhau:<br><br>• <strong>Sự kiện công ty:</strong> Team building, họp mặt<br>• <strong>Tiệc tùng:</strong> Sinh nhật, cưới hỏi, liên hoan<br>• <strong>Trường học:</strong> Sự kiện học sinh, sinh viên<br>• <strong>Quán cà phê:</strong> Biểu diễn thường xuyên<br>• <strong>Tại nhà:</strong> Tiệc riêng, gia đình<br>• <strong>Online:</strong> Workshop, khóa học trực tuyến<br><br>Phù hợp với mọi không gian từ nhỏ đến lớn.',
        isOpen: false
      }
    ]
  },
  {
    title: 'DỊCH VỤ LẬP TRÌNH',
    items: [
      {
        question: 'Bạn có thể phát triển những loại ứng dụng nào?',
        answer: 'Tôi có thể phát triển đa dạng các loại ứng dụng:<br><br>• <strong>Website:</strong> Landing page, blog, thương mại điện tử<br>• <strong>Ứng dụng web:</strong> Hệ thống quản lý, dashboard<br>• <strong>Mobile App:</strong> iOS, Android, cross-platform<br>• <strong>API:</strong> RESTful API, GraphQL<br>• <strong>E-commerce:</strong> Shop online, thanh toán<br>• <strong>Hệ thống quản lý:</strong> CRM, ERP, inventory<br><br>Từ dự án nhỏ đến hệ thống phức tạp với hàng nghìn người dùng.',
        isOpen: false
      },
      {
        question: 'Quy trình làm việc của bạn như thế nào?',
        answer: 'Quy trình làm việc chuyên nghiệp:<br><br>1. <strong>Tư vấn miễn phí:</strong> Phân tích nhu cầu, đưa ra giải pháp<br>2. <strong>Báo giá chi tiết:</strong> Timeline, chi phí, tính năng<br>3. <strong>Ký hợp đồng:</strong> Rõ ràng về quyền lợi và trách nhiệm<br>4. <strong>Thiết kế UI/UX:</strong> Giao diện đẹp, trải nghiệm tốt<br>5. <strong>Phát triển:</strong> Code chất lượng, bảo mật cao<br>6. <strong>Test & Deploy:</strong> Kiểm tra kỹ lưỡng trước khi launch<br>7. <strong>Hỗ trợ sau bán:</strong> Bảo trì, cập nhật, sửa lỗi',
        isOpen: false
      },
      {
        question: 'Thời gian hoàn thành dự án là bao lâu?',
        answer: 'Thời gian phụ thuộc vào độ phức tạp của dự án:<br><br>• <strong>Landing page:</strong> 1-2 tuần<br>• <strong>Website đơn giản:</strong> 2-4 tuần<br>• <strong>Ứng dụng web:</strong> 1-3 tháng<br>• <strong>Mobile app:</strong> 2-4 tháng<br>• <strong>Hệ thống phức tạp:</strong> 3-6 tháng<br><br>Tôi luôn cập nhật tiến độ và có thể điều chỉnh timeline theo yêu cầu.',
        isOpen: false
      },
      {
        question: 'Bạn có hỗ trợ bảo trì sau khi hoàn thành không?',
        answer: 'Có, tôi cung cấp gói bảo trì toàn diện:<br><br>• <strong>Bảo trì cơ bản:</strong> Sửa lỗi, cập nhật nhỏ<br>• <strong>Bảo trì nâng cao:</strong> Thêm tính năng mới<br>• <strong>Monitoring 24/7:</strong> Theo dõi hệ thống liên tục<br>• <strong>Backup & Security:</strong> Sao lưu, bảo mật<br>• <strong>Performance optimization:</strong> Tối ưu tốc độ<br>• <strong>Training:</strong> Hướng dẫn sử dụng cho khách hàng<br><br>Đảm bảo ứng dụng hoạt động ổn định và an toàn.',
        isOpen: false
      }
    ]
  },
  {
    title: 'DỊCH VỤ ẢO THUẬT',
    items: [
      {
        question: 'Bạn có thể biểu diễn những loại ảo thuật nào?',
        answer: 'Tôi chuyên về nhiều loại ảo thuật khác nhau:<br><br>• <strong>Close-up Magic:</strong> Ảo thuật gần, tương tác trực tiếp<br>• <strong>Stage Magic:</strong> Biểu diễn sân khấu lớn<br>• <strong>Mentalism:</strong> Đọc suy nghĩ, dự đoán<br>• <strong>Card Tricks:</strong> Ảo thuật bài chuyên nghiệp<br>• <strong>Coin Magic:</strong> Ảo thuật xu, đồng xu<br>• <strong>Mind Reading:</strong> Đọc suy nghĩ, tâm linh<br><br>Mỗi loại đều có kỹ thuật riêng và phù hợp với từng sự kiện.',
        isOpen: false
      },
      {
        question: 'Thời gian chuẩn bị cho một show là bao lâu?',
        answer: 'Thời gian chuẩn bị tùy thuộc vào quy mô show:<br><br>• <strong>Show nhỏ (10-20 người):</strong> 1-2 ngày<br>• <strong>Show trung bình (20-50 người):</strong> 3-5 ngày<br>• <strong>Show lớn (50+ người):</strong> 1-2 tuần<br>• <strong>Sự kiện đặc biệt:</strong> 2-4 tuần<br><br>Bao gồm: Lên kịch bản, tập luyện, chuẩn bị đạo cụ, kiểm tra âm thanh ánh sáng.',
        isOpen: false
      },
      {
        question: 'Bạn có cần không gian đặc biệt để biểu diễn không?',
        answer: 'Tôi có thể biểu diễn trong nhiều không gian khác nhau:<br><br>• <strong>Không gian nhỏ:</strong> Phòng họp, quán cà phê<br>• <strong>Không gian vừa:</strong> Sảnh khách sạn, phòng hội nghị<br>• <strong>Không gian lớn:</strong> Sân khấu, hội trường<br>• <strong>Ngoài trời:</strong> Sân vườn, bãi biển<br>• <strong>Online:</strong> Zoom, Google Meet<br><br>Chỉ cần thông báo trước về không gian để tôi chuẩn bị phù hợp.',
        isOpen: false
      },
      {
        question: 'Bạn có thể tùy chỉnh nội dung show theo yêu cầu không?',
        answer: 'Hoàn toàn có thể! Tôi luôn tùy chỉnh show theo yêu cầu:<br><br>• <strong>Chủ đề riêng:</strong> Phù hợp với sự kiện, công ty<br>• <strong>Thời lượng:</strong> Từ 15 phút đến 2 giờ<br>• <strong>Độ tuổi:</strong> Trẻ em, thanh niên, người lớn<br>• <strong>Ngôn ngữ:</strong> Tiếng Việt, tiếng Anh<br>• <strong>Phong cách:</strong> Nghiêm túc, vui nhộn, bí ẩn<br>• <strong>Tương tác:</strong> Mức độ tương tác với khán giả<br><br>Mục tiêu là tạo ra trải nghiệm độc đáo và đáng nhớ.',
        isOpen: false
      }
    ]
  }
])

// Toggle FAQ function
const toggleFaq = (categoryIndex, itemIndex) => {
  // Close all other FAQs in the same category
  faqData.value[categoryIndex].items.forEach((item, index) => {
    if (index !== itemIndex) {
      item.isOpen = false
    }
  })
  
  // Toggle the clicked FAQ
  faqData.value[categoryIndex].items[itemIndex].isOpen = !faqData.value[categoryIndex].items[itemIndex].isOpen
}
</script>

<style scoped>
/* Custom styles for the FAQ component */
.prose a {
  @apply text-orange-500 hover:text-orange-600 underline transition-colors duration-200;
}

.prose strong {
  @apply text-black font-semibold;
}

.prose ul {
  @apply list-disc list-inside space-y-1;
}

.prose ol {
  @apply list-decimal list-inside space-y-1;
}
</style> 