import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cư Dân Nói Gì?</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center relative"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
              <img 
                src={TESTIMONIALS[index].avatar} 
                alt={TESTIMONIALS[index].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
              />
              <div className="flex justify-center mb-4">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 italic mb-6">"{TESTIMONIALS[index].content}"</p>
              <div>
                <h4 className="text-lg font-bold text-gray-900">{TESTIMONIALS[index].name}</h4>
                <p className="text-primary">{TESTIMONIALS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={next} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};