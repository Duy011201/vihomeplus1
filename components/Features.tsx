import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smile, Clock, Star } from 'lucide-react';

const features = [
  { icon: Shield, title: 'An Ninh Tuyệt Đối', desc: 'Camera giám sát 24/7, khóa vân tay an toàn.' },
  { icon: Smile, title: 'Cộng Đồng Văn Minh', desc: 'Môi trường sống thân thiện, tri thức.' },
  { icon: Clock, title: 'Hỗ Trợ 24/7', desc: 'Đội ngũ kỹ thuật hỗ trợ nhanh chóng mọi lúc.' },
  { icon: Star, title: 'Dịch Vụ Cao Cấp', desc: 'Vệ sinh định kỳ, wifi tốc độ cao miễn phí.' },
];

export const Features = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại Sao Chọn HIVOME PLUS?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Chúng tôi cam kết mang đến trải nghiệm sống tốt nhất cho cư dân.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <f.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);