import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sticky top-0 z-70">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sẵn sàng nâng tầm doanh nghiệp?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Hãy để QTech Solutions đồng hành cùng bạn trên hành trình chuyển đổi số
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="mailto:contact@qtech.com.vn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            <span>contact@qtech.com.vn</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <p className="text-gray-300 mb-4">
            Hoặc liên hệ trực tiếp qua hotline:
          </p>
          <a
            href="tel:+84123456789"
            className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text hover:from-purple-400 hover:to-blue-400 transition-all"
          >
            +84 123 456 789
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
