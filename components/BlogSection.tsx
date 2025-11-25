import React from 'react';
import { MOCK_BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const BlogSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tin Tức & Mẹo Sống</h2>
          <p className="text-gray-600">Kiến thức bổ ích cho cuộc sống thuê trọ</p>
        </div>
        <button className="text-primary font-semibold flex items-center hover:underline">
          Xem tất cả <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_BLOGS.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-bold mb-2 uppercase tracking-wide">{blog.author} • {blog.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{blog.excerpt}</p>
              <span className="text-sm font-semibold text-gray-900 flex items-center">
                Đọc thêm <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);