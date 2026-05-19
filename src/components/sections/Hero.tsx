import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../shared/Button';
import { Users, Award, Wallet, MapPin } from 'lucide-react';
import { AnimatedNumber } from '../shared/AnimatedNumber';
import { images, handleImageError } from '../../assets/images';

export function Hero() {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#EBE2D3] to-transparent opacity-50 z-0 rounded-l-full translate-x-1/4 -translate-y-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-navy-900 font-bold mb-2">
                <span className="block text-xl md:text-2xl text-gold-600 mb-1 uppercase tracking-wider">Sakuna Boybin</span>
                <span className="block text-sm md:text-base text-gray-500 uppercase">Senior Leader | Uni</span>
              </h1>
              
              <div className="mt-8 mb-6">
                <div className="text-7xl md:text-9xl font-inter font-black text-gold-500 flex items-center justify-center md:justify-start tracking-tighter">
                  <AnimatedNumber value={47} duration={2} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mt-2 leading-tight">
                  <span className="block mb-1">คนที่ได้เปลี่ยนชีวิต</span>
                  <span className="block">กับพี่ใน 3 ปี</span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                จากคนธรรมดา สู่ชีวิตที่มีอิสระ<br />
                รายได้ที่มั่นคง และเวลาที่เป็นของตัวเอง<br />
                <span className="text-sm text-gray-500 mt-2 block italic">"พี่ไม่ได้ขายฝัน แต่พี่พิสูจน์แล้วว่า 'ทำได้จริง'"</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* TODO: Add Line contact URL */}
                <Button variant="accent" href="#contact" className="gap-2">
                  🚀 เริ่มเส้นทางนี้
                </Button>
                <Button variant="outline" href="#roadmap">
                  ดูรายละเอียดเส้นทาง
                </Button>
              </div>
              
              <p className="text-xs text-gray-400 mt-6">* ผลลัพธ์ขึ้นอยู่กับความพยายามและการลงมือทำของแต่ละบุคคล</p>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto bg-gray-100"
            >
              {/* รูปจริง Sakuna ภาพงานสัมมนา */}
              <img 
                src={images.hero} 
                alt="Sakuna Boybin" 
                onError={handleImageError}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <Users className="text-gold-500" size={32} />
            <span className="font-semibold text-navy-900 text-sm md:text-base">15,000+ คน<br/><span className="font-normal text-gray-500 text-xs">ในทีมพี่</span></span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Award className="text-gold-500" size={32} />
            <span className="font-semibold text-navy-900 text-sm md:text-base">Uni Global<br/><span className="font-normal text-gray-500 text-xs">Official Leader</span></span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Wallet className="text-gold-500" size={32} />
            <span className="font-semibold text-navy-900 text-sm md:text-base">รายได้จริง<br/><span className="font-normal text-gray-500 text-xs">จ่ายจริง</span></span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <MapPin className="text-gold-500" size={32} />
            <span className="font-semibold text-navy-900 text-sm md:text-base">อบรมต่อเนื่อง<br/><span className="font-normal text-gray-500 text-xs">ทุกสัปดาห์</span></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
