import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@qtech.com.vn', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              QTech Solutions
            </h3>
            <p className="text-gray-400">
              Hiện Thực Hóa Ý Tưởng - Đột Phá Công Nghệ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © 2024 QTech Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
