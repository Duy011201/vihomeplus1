import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Check, DollarSign, Maximize, Phone, Mail } from 'lucide-react';
import { Room } from '../types';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!room) return null;

  return (
    <AnimatePresence>
      {room && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
          
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Left: Gallery */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-100 relative flex flex-col">
               <div className="flex-grow relative">
                  <img 
                    src={room.images[activeImage]} 
                    alt={room.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
               </div>
               <div className="flex gap-2 p-4 overflow-x-auto bg-white/10 backdrop-blur absolute bottom-0 w-full">
                 {room.images.map((img, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                   >
                     <img src={img} className="w-full h-full object-cover" alt="thumb" />
                   </button>
                 ))}
               </div>
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto bg-white custom-scrollbar">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-2">
                  {room.type}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{room.title}</h2>
                <div className="flex items-start text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" />
                  <span>{room.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <DollarSign className="w-4 h-4 mr-1" /> Giá thuê
                  </div>
                  <div className="text-xl font-bold text-primary">{room.price.toLocaleString('vi-VN')}₫</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <Maximize className="w-4 h-4 mr-1" /> Diện tích
                  </div>
                  <div className="text-xl font-bold text-gray-900">{room.area} m²</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Đặt cọc</div>
                  <div className="font-semibold text-gray-900">{room.deposit.toLocaleString('vi-VN')}₫</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Trạng thái</div>
                  <div className={`font-semibold ${room.isAvailable ? 'text-green-600' : 'text-red-500'}`}>
                    {room.isAvailable ? 'Còn phòng' : 'Hết phòng'}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tiện nghi</h3>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((item, i) => (
                    <span key={i} className="flex items-center px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
                      <Check className="w-3 h-3 mr-1 text-green-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Mô tả chi tiết</h3>
                <p className="text-gray-600 leading-relaxed">{room.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                   <div>⚡ Điện: <span className="font-semibold">{room.electricityPrice.toLocaleString('vi-VN')}₫ / kWh</span></div>
                   <div>💧 Nước: <span className="font-semibold">{room.waterPrice.toLocaleString('vi-VN')}₫ / người</span></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-3 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </button>
                 <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Gửi yêu cầu
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};