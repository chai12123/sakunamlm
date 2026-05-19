import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { images, handleImageError } from '../../assets/images';

export function AboutSakuna() {
  return (
    <SectionWrapper className="bg-navy-900 overflow-visible relative pb-0 pt-20">
      <div className="flex flex-col md:flex-row items-end gap-0">
        <div className="w-full md:w-1/2 pr-0 md:pr-12 pb-16 md:pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ทำไมพี่ถึงมาทำสิ่งนี้?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              "เมื่อก่อนพี่ก็เป็นพนักงานประจำที่ทำงานหนัก หัวปักหัวปำ วันหยุดก็ยังต้องเคลียร์งาน 
              รายได้ก็พอมีพอกิน แต่สิ่งที่หายไปคือ 'เวลา' เวลาให้ตัวเอง เวลาให้คนที่เรารัก"
            </p>
            <p>
              จนวันนึงพี่ได้รู้จักระบบการทำงานของทีมนี้ พี่เริ่มต้นจาก 0 ไม่เก่งโซเชียล 
              ไม่มีคอนเนคชั่น แต่ระบบที่นี่สอนทุกอย่าง จนพี่สามารถสร้างยอดทะลุเป้าหมายได้ในปีแรก
            </p>
            <p className="text-white font-semibold pt-4">
              "เป้าหมายของพี่ในวันนี้ คือการส่งต่อโอกาส และความรู้ทั้งหมดนี้ ให้กับคนที่พร้อมจะลุยไปด้วยกัน"
            </p>
          </div>
          
           {/* Signature - Using a playful font if possible or script */}
          <div className="mt-8">
            <span className="font-serif text-3xl text-gold-500 italic">Sakuna Boybin</span>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          {/* รูปจริง Sakuna ภาพออฟฟิศ */}
          <div className="relative pb-[133%] md:pb-[133%]">
             <img 
              src={images.aboutSakuna} 
              alt="Sakuna Portrait" 
              onError={handleImageError}
              className="absolute bottom-0 right-0 w-full h-full object-cover object-center rounded-tl-3xl opacity-80"
              style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)' }}
            />
            {/* Overlay gradient to blend bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
          </div>
          <div className="absolute top-1/4 right-0 transform translate-x-1/2 -rotate-90 hidden md:block">
            <span className="text-navy-900 uppercase font-black tracking-[0.3em] text-4xl opacity-20 whitespace-nowrap">
              Sakuna Boybin
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
