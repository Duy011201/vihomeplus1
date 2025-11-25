import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearchClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchClick }) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Luxury Room Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-gray-900/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm md:text-base mb-4">
            HIVOME PLUS Residence
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Tìm Không Gian Sống <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Lý Tưởng Của Bạn
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl font-light">
            Trải nghiệm sự tiện nghi, an toàn và giá cả hợp lý. Hệ thống phòng trọ hiện đại nhất dành cho sinh viên và người đi làm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSearchClick}
              className="px-8 py-4 bg-primary hover:bg-indigo-700 text-white rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Search className="w-5 h-5" />
              Tìm Phòng Ngay
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('rooms-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              Xem Danh Sách
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};