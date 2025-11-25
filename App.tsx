import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { SearchSection } from './components/SearchSection';
import { RoomModal } from './components/RoomModal';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { PricingCalculator } from './components/PricingCalculator';
import { BlogSection } from './components/BlogSection';
import { ContactForm } from './components/ContactForm';
import { Room } from './types';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleSearchClick = () => {
    document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-primary flex items-center gap-2">
            VIHOME PLUS
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Trang Chủ</a>
            <a href="#search-section" className="hover:text-primary transition-colors">Phòng Trọ</a>
            <a href="#features" className="hover:text-primary transition-colors">Tiện Ích</a>
            <a href="#contact" className="hover:text-primary transition-colors">Liên Hệ</a>
          </div>
          <button onClick={handleSearchClick} className="bg-secondary text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-amber-600 transition-colors">
            Tìm Phòng
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <Hero onSearchClick={handleSearchClick} />
        
        <div id="features">
          <Features />
        </div>

        <SearchSection onRoomClick={setSelectedRoom} />

        <PricingCalculator />
        
        <Testimonials />

        <BlogSection />

        <ContactForm />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-extrabold text-white mb-6">HIVOME PLUS</div>
              <p className="text-gray-400 mb-6">
                Hệ thống phòng trọ, căn hộ dịch vụ hàng đầu cho sinh viên và người trẻ tại TP.HCM.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#search-section" className="hover:text-white transition-colors">Danh sách phòng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Khu vực</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quận 1</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quận Bình Thạnh</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quận 7</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TP. Thủ Đức</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary" />
                  123 Đường ABC, Quận 1, TP.HCM
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-secondary" />
                  1900 1234
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            © 2024 HIVOME PLUS. All rights reserved.
          </div>
        </div>
      </footer>

      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </div>
  );
};

export default App;