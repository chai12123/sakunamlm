import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';

export function UrgencyCohort() {
  // TODO: เปลี่ยนตัวเลขเหล่านี้ให้เชื่อมโยงกับเวลาและโควต้าจริงๆ
  const totalSlots = 10;
  const takenSlots = 8;
  const progressPercent = (takenSlots / totalSlots) * 100;
  
  return (
    <SectionWrapper bgNavy className="relative border-y border-gold-500/20">
      {/* Network background graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 800 600" className="w-[150%] md:w-full h-auto text-gold-500 stroke-current">
          <circle cx="400" cy="300" r="250" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="300" r="150" fill="none" strokeWidth="1" />
          <path d="M400,50 L400,550 M150,300 L650,300 M223,123 L577,477 M223,477 L577,123" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-gold-400 font-bold tracking-widest text-sm uppercase mb-2 block">
          LIMITED COHORT
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          รับสมาชิกใหม่รอบนี้เพียง <span className="text-gold-500">{totalSlots} คน</span>
        </h2>

        <div className="bg-navy-800/80 backdrop-blur-sm border border-gold-500/30 rounded-3xl p-8 max-w-2xl mx-auto mb-10 shadow-2xl">
          <div className="flex justify-center items-center gap-2 mb-6 text-gray-300">
            <Clock size={20} className="text-gold-500" />
            <span>เปิดรับสมัคร: 1-15 มิถุนายน 2026</span>
          </div>

          <div className="text-6xl md:text-8xl font-bold text-gold-500 mb-6 drop-shadow-md">
            {takenSlots}/{totalSlots}
          </div>

          <div className="h-3 w-full bg-navy-900 rounded-full overflow-hidden mb-4 border border-navy-700">
            <div 
              className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          
          <p className="text-red-400 font-semibold mb-8">
            ปิดรับ 15 มิ.ย. หรือเมื่อครบจำนวน
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-gray-300 mb-8">
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-400"/> เรียนกันพี่แบบใกล้ชิด</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-400"/> มีระบบให้พร้อมเริ่ม</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-400"/> ดูแลตลอด 90 วันแรก</div>
          </div>

          {/* TODO: Add Line URL */}
          <Button variant="accent" size="lg" fullWidth href="#contact" className="text-lg">
            จองที่นั่ง <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
