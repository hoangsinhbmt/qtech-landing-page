import { motion } from 'framer-motion';
import { Zap, TrendingUp, Code, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Quy Trình Agile',
    description: 'Phát triển linh hoạt, phản hồi nhanh và cải tiến liên tục',
  },
  {
    icon: TrendingUp,
    title: 'Xu Hướng Mới Nhất',
    description: 'Luôn cập nhật và áp dụng các công nghệ tiên tiến nhất',
  },
  {
    icon: Code,
    title: 'Công Nghệ Hiện Đại',
    description: 'ReactJS, VueJS, TypeScript, GraphQL và nhiều hơn nữa',
  },
  {
    icon: Shield,
    title: 'Chất Lượng & Bảo Mật',
    description: 'Cam kết chất lượng cao và bảo mật tuyệt đối',
  },
];

export default function Highlights() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sticky top-0 z-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Điểm Nổi Bật
          </h2>
          <p className="text-xl text-gray-300">
            Những giá trị cốt lõi tạo nên sự khác biệt của chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
