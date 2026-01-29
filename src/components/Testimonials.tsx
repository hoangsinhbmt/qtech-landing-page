import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    position: 'CEO, Tech Startup',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content:
      'QTech Solutions đã giúp chúng tôi xây dựng nền tảng công nghệ vững chắc. Đội ngũ chuyên nghiệp, sản phẩm chất lượng cao và hỗ trợ tận tình.',
    rating: 5,
  },
  {
    name: 'Trần Thị B',
    position: 'Giám Đốc Marketing',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content:
      'Website của chúng tôi được thiết kế đẹp mắt, tối ưu SEO và mang lại nhiều khách hàng tiềm năng. Tôi rất hài lòng với dịch vụ!',
    rating: 5,
  },
  {
    name: 'Lê Minh C',
    position: 'Founder, E-commerce',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content:
      'Ứng dụng mobile do QTech phát triển hoạt động mượt mà, ổn định. Họ thực sự hiểu rõ nhu cầu và mang đến giải pháp tối ưu.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sticky top-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-xl text-gray-300">
            Những đánh giá chân thực từ khách hàng của chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-purple-400" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
