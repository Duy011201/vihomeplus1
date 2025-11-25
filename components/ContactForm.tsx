import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="md:w-5/12 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
              <p className="text-indigo-100 mb-8">
                Để lại thông tin, đội ngũ tư vấn sẽ liên hệ với bạn trong vòng 15 phút.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">📞</div>
                  <span>1900 1234</span>
                </div>
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">📧</div>
                  <span>info@hivome.plus</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary rounded-full opacity-30 blur-3xl"></div>
          </div>

          <div className="md:w-7/12 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Nguyễn Văn A" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                   <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="example@mail.com" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                   <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="0901234567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nhu cầu của bạn</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Tôi đang tìm phòng khu vực..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${
                  status === 'success' ? 'bg-green-500' : 'bg-secondary hover:bg-amber-600'
                }`}
              >
                {status === 'submitting' && (
                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" /> Đã Gửi Thành Công!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    Gửi Thông Tin <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};