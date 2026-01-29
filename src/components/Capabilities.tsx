import { motion } from 'framer-motion';
import { Users, Cpu, Award, HeadphonesIcon } from 'lucide-react';

const capabilities = [
  {
    icon: Users,
    title: 'Đội Ngũ Chuyên Gia',
    description: 'Hơn 50+ kỹ sư giàu kinh nghiệm với chuyên môn đa dạng',
    details: '10+ năm kinh nghiệm trung bình',
  },
  {
    icon: Cpu,
    title: 'Công Nghệ Tiên Tiến',
    description: 'Áp dụng các công nghệ và framework mới nhất',
    details: 'React, Vue, Node.js, Cloud Native',
  },
  {
    icon: Award,
    title: 'Tiêu Chuẩn Quốc Tế',
    description: 'Tuân thủ các chuẩn mực phát triển phần mềm toàn cầu',
    details: 'ISO 9001, CMMI Level 3',
  },
  {
    icon: HeadphonesIcon,
    title: 'Hỗ Trợ Tận Tâm',
    description: 'Đồng hành cùng khách hàng 24/7 mọi lúc mọi nơi',
    details: 'Support hotline & online chat',
  },
];

export default function Capabilities() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Năng Lực Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-300">
            Những yếu tố tạo nên sức mạnh của QTech Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {capability.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {capability.description}
                </p>

                <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-purple-400 text-sm font-medium">
                    {capability.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
