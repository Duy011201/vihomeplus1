import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { RoomType } from '../types';

export const PricingCalculator = () => {
  const [type, setType] = useState(RoomType.STUDIO);
  const [occupants, setOccupants] = useState(1);
  const [duration, setDuration] = useState(12);
  const [addons, setAddons] = useState({
    cleaning: false,
    parking: false,
    gym: false
  });

  const basePrices = {
    [RoomType.STUDIO]: 6000000,
    [RoomType.ONE_BEDROOM]: 5000000,
    [RoomType.TWO_BEDROOM]: 9000000,
    [RoomType.DORM]: 3500000,
  };

  const calculateTotal = () => {
    let base = basePrices[type];
    
    // Duration discount
    if (duration >= 12) base *= 0.9;
    else if (duration >= 6) base *= 0.95;

    // Addons
    let extras = 0;
    if (addons.cleaning) extras += 500000;
    if (addons.parking) extras += 200000;
    if (addons.gym) extras += 300000;

    // Occupants surcharge (simple logic)
    if (type !== RoomType.DORM && occupants > 2) {
      extras += (occupants - 2) * 500000;
    }

    return base + extras;
  };

  const total = calculateTotal();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Dự Toán Chi Phí</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Tính toán chi phí thuê phòng ước tính dựa trên nhu cầu thực tế của bạn. Chúng tôi minh bạch mọi khoản phí.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Loại phòng</label>
                <select 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none"
                  value={type}
                  onChange={(e) => setType(e.target.value as RoomType)}
                >
                  {Object.values(RoomType).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Số người ở</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="5"
                    value={occupants}
                    onChange={(e) => setOccupants(parseInt(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-2 text-gray-300">Thời gian thuê (tháng)</label>
                   <input 
                    type="number" 
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Dịch vụ thêm</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { key: 'cleaning', label: 'Dọn phòng (+500k)' },
                    { key: 'parking', label: 'Gửi xe (+200k)' },
                    { key: 'gym', label: 'Thẻ Gym (+300k)' },
                  ].map((addon) => (
                    <label key={addon.key} className="flex items-center space-x-2 cursor-pointer bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500">
                      <input 
                        type="checkbox" 
                        checked={addons[addon.key as keyof typeof addons]}
                        onChange={(e) => setAddons({...addons, [addon.key]: e.target.checked})}
                        className="form-checkbox text-primary rounded"
                      />
                      <span>{addon.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            layout
            className="lg:w-1/2 w-full bg-gradient-to-br from-primary to-indigo-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <Calculator className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-indigo-100 mb-2">Chi phí ước tính hàng tháng</h3>
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                {total.toLocaleString('vi-VN')}
                <span className="text-2xl text-indigo-200">₫</span>
              </div>
              <p className="text-indigo-200 text-sm mb-8">
                *Đã bao gồm ưu đãi {duration >= 12 ? '10%' : (duration >= 6 ? '5%' : '0%')} cho hợp đồng {duration} tháng
              </p>
              <button className="w-full py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors">
                Nhận Báo Giá Chi Tiết
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};