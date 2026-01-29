import { motion } from 'framer-motion';
import { MessageSquare, Code, Rocket } from 'lucide-react';

const processes = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tư Vấn & Phân Tích',
    description: 'Lắng nghe, hiểu rõ nhu cầu và đưa ra giải pháp tối ưu nhất',
    items: [
      'Phân tích yêu cầu chi tiết',
      'Tư vấn công nghệ phù hợp',
      'Lập kế hoạch dự án',
    ],
  },
  {
    icon: Code,
    number: '02',
    title: 'Phát Triển & Kiểm Thử',
    description: 'Xây dựng sản phẩm với quy trình Agile và testing nghiêm ngặt',
    items: [
      'Sprint planning & development',
      'Code review & quality assurance',
      'Testing & bug fixing',
    ],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Triển Khai & Bảo Trì',
    description: 'Deploy lên production và hỗ trợ bảo trì dài hạn',
    items: [
      'Deployment & monitoring',
      'Performance optimization',
      'Maintenance & support',
    ],
  },
];

export default function Process() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sticky top-0 z-60">
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
            Quy Trình Làm Việc
          </h2>
          <p className="text-xl text-gray-300">
            Phương pháp làm việc chuyên nghiệp và hiệu quả
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                  {process.number}
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {process.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {process.description}
                  </p>

                  <ul className="space-y-3">
                    {process.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
