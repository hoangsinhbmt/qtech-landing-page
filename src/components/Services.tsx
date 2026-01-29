import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code2, Palette, X, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'vieclamvn.com',
    subtitle: 'Nền Tảng Tuyển Dụng',
    description: 'Hệ thống tuyển dụng hàng đầu Việt Nam với hàng ngàn cơ hội việc làm',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    features: [
      'Tìm kiếm việc làm thông minh với AI',
      'Hệ thống matching ứng viên - nhà tuyển dụng',
      'Dashboard quản lý tuyển dụng toàn diện',
      'Tích hợp thanh toán và báo cáo chi tiết',
    ],
  },
  {
    icon: Code2,
    title: 'Outsourcing Software',
    subtitle: 'Phát Triển Phần Mềm',
    description: 'Giải pháp phát triển ứng dụng Web và Mobile toàn diện',
    tech: ['React', 'Vue.js', 'React Native', 'Node.js'],
    features: [
      'Ứng dụng Web responsive đa nền tảng',
      'Mobile App iOS & Android native',
      'Backend API mạnh mẽ và bảo mật',
      'Tích hợp Cloud và DevOps',
    ],
  },
  {
    icon: Palette,
    title: 'Website Design',
    subtitle: 'Thiết Kế Website',
    description: 'Thiết kế UI/UX hiện đại, tối ưu SEO và trải nghiệm người dùng',
    tech: ['Figma', 'React', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Thiết kế UI/UX chuyên nghiệp',
      'Landing page chuyển đổi cao',
      'Website tối ưu SEO và hiệu suất',
      'Responsive và accessibility',
    ],
  },
];

export default function Services() {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setFocusedCard(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleClose = () => {
    setFocusedCard(null);
  };

  const handleNext = () => {
    if (focusedCard !== null && focusedCard < services.length - 1) {
      setFocusedCard(focusedCard + 1);
      cardRefs.current[focusedCard + 1]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePrev = () => {
    if (focusedCard !== null && focusedCard > 0) {
      setFocusedCard(focusedCard - 1);
      cardRefs.current[focusedCard - 1]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusedCard === null) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedCard]);

  return (
    <section className="relative min-h-screen py-20 px-6 sticky top-0 z-30">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-300">
            Giải pháp công nghệ toàn diện cho mọi nhu cầu
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: focusedCard === index ? 1.05 : focusedCard !== null ? 0.95 : 1,
                  opacity: focusedCard === null || focusedCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.4 }}
                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setFocusedCard(index)}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-purple-400 text-lg mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <AnimatePresence>
                      {focusedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-6 space-y-4"
                        >
                          <div>
                            <h4 className="text-white font-semibold mb-3">
                              Công Nghệ Sử Dụng:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-purple-500/30 text-white text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-3">
                              Tính Năng Nổi Bật:
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-300">
                                  <span className="text-purple-400 mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {focusedCard !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed top-4 right-4 z-50 flex gap-2"
            >
              <button
                onClick={handlePrev}
                disabled={focusedCard === 0}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                disabled={focusedCard === services.length - 1}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleClose}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
