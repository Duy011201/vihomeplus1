import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, MapPin, Home, DollarSign } from 'lucide-react';
import { ROOMS } from '../constants';
import { Room, RoomType } from '../types';

interface SearchSectionProps {
  onRoomClick: (room: Room) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onRoomClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000000]);
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredRooms = useMemo(() => {
    return ROOMS.filter(room => {
      const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            room.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
      const matchesType = selectedType === 'All' || room.type === selectedType;

      return matchesSearch && matchesPrice && matchesType;
    });
  }, [searchTerm, priceRange, selectedType]);

  return (
    <section id="search-section" className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tìm Kiếm Nơi Ở</h2>
          <p className="text-gray-600">Lọc theo nhu cầu của bạn để tìm căn phòng phù hợp nhất</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-xl mb-12 border border-gray-100 sticky top-4 z-30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Keyword Search */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Từ khóa / Địa điểm</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Nhập tên quận, đường..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Room Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loại phòng</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none appearance-none bg-white"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="All">Tất cả loại phòng</option>
                  {Object.values(RoomType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Filter (Simplified for UX) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Khoảng giá (tối đa)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none appearance-none bg-white"
                   onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                >
                  <option value="15000000">Bất kỳ giá nào</option>
                  <option value="3000000">Dưới 3 triệu</option>
                  <option value="5000000">Dưới 5 triệu</option>
                  <option value="8000000">Dưới 8 triệu</option>
                  <option value="12000000">Dưới 12 triệu</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div id="rooms-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <motion.div
                  layout
                  key={room.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer group border border-gray-100 flex flex-col"
                  onClick={() => onRoomClick(room)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                      {room.type}
                    </div>
                    {!room.isAvailable && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold border-2 border-white px-4 py-2 rounded uppercase tracking-wider">Hết Phòng</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{room.title}</h3>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="line-clamp-1">{room.address}</span>
                      </div>
                      
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {room.amenities.slice(0, 3).map((amenity, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{amenity}</span>
                        ))}
                        {room.amenities.length > 3 && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">+{room.amenities.length - 3}</span>}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">
                      <div>
                         <span className="text-2xl font-bold text-primary">{room.price.toLocaleString('vi-VN')}</span>
                         <span className="text-xs text-gray-500 align-top">₫/tháng</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{room.area}m²</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900">Không tìm thấy phòng phù hợp</h3>
                <p className="text-gray-500 mt-2">Vui lòng thử lại với bộ lọc khác.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};