import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';

type RoadmapStep = {
  stepNumber: 1 | 2 | 3 | 4;
  dayRange: string;
  icon: string; // emoji
  title: string;
  description: string;
  incomeProjection: string;
  isFeatured: boolean;
};

const roadmapSteps: RoadmapStep[] = [
  {
    stepNumber: 1,
    dayRange: 'Day 1-7',
    icon: '📞',
    title: 'Discovery',
    description: 'เรียนรู้ระบบ สร้างความเข้าใจ',
    incomeProjection: '0 บาท',
    isFeatured: false,
  },
  {
    stepNumber: 2,
    dayRange: 'Day 8-30',
    icon: '🌱',
    title: 'Foundation',
    description: 'ลงมือทำ สร้างฐานลูกค้าและทีม',
    incomeProjection: '3-8K',
    isFeatured: false,
  },
  {
    stepNumber: 3,
    dayRange: 'Day 31-60',
    icon: '📈',
    title: 'Growth',
    description: 'ขยายทีม เพิ่มรายได้ต่อเนื่อง',
    incomeProjection: '15-30K',
    isFeatured: false,
  },
  {
    stepNumber: 4,
    dayRange: 'Day 61-90',
    icon: '🎯',
    title: 'Momentum',
    description: 'สร้างทีมแข็งแรง รายได้ก้าวกระโดด',
    incomeProjection: '30-60K',
    isFeatured: true,
  },
];

export function Roadmap() {
  return (
    <SectionWrapper id="roadmap" className="bg-[#1A2F4E] text-white">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          เส้นทาง 90 วันแรก
        </h2>
        <p className="text-[#C9A86A]">แผนงานที่เป็นระบบ ทำตามได้จริง พี่จับมือทำ</p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-[56px] md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C9A86A] via-[#C9A86A]/40 to-[#1A2F4E] z-0"></div>

        <div className="flex flex-col gap-6 md:gap-0">
          {roadmapSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const isFeatured = step.isFeatured;
            
            return (
              <div 
                key={step.stepNumber} 
                className="relative flex flex-row md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 my-2 md:my-6"
              >
                
                {/* Mobile Dot Area / Desktop Center */}
                <div className="w-[80px] shrink-0 flex justify-center md:w-auto md:col-start-2 md:row-start-1 z-10">
                  <div className={`
                    flex items-center justify-center rounded-full bg-[#C9A86A] border-4 border-[#1A2F4E] font-inter font-black text-[#1A2F4E]
                    ${isFeatured ? 'w-16 h-16 text-2xl shadow-[0_0_20px_rgba(201,168,106,0.5)]' : 'w-12 h-12 text-xl'}
                  `}>
                    {step.stepNumber}
                  </div>
                </div>

                {/* Desktop Left / Right positioning wrapper */}
                <div className={`
                  flex-1 w-full z-10
                  ${isLeft ? 'md:col-start-1 md:row-start-1 md:flex md:justify-end' : 'md:col-start-3 md:row-start-1 md:flex md:justify-start'}
                `}>
                   <div className={`
                      p-6 rounded-2xl w-full text-left md:max-w-[380px] xl:max-w-[450px] transition-transform duration-300
                      ${isFeatured ? 'bg-gradient-to-br from-[#C9A86A]/5 to-transparent bg-[#243854] border-2 border-[#C9A86A] shadow-[0_0_30px_rgba(201,168,106,0.4)] md:scale-105' : 'bg-[#243854] border border-[#C9A86A]/30'}
                   `}>
                     <div className="flex items-center gap-3 mb-4">
                       <div className="w-10 h-10 rounded-xl bg-[#1A2F4E] flex items-center justify-center shrink-0 border border-white/5">
                         <span className="text-xl leading-none" role="img" aria-label={step.title}>{step.icon}</span>
                       </div>
                       <span className="text-[#C9A86A] font-semibold">{step.dayRange}</span>
                     </div>
                     
                     <h3 className="text-2xl font-bold text-white font-inter mb-2">{step.title}</h3>
                     <p className="text-[#F9F6F0]/80 text-sm mb-6 leading-relaxed">{step.description}</p>
                     
                     <div className={`
                        inline-flex font-semibold text-sm px-4 py-1.5 rounded-full whitespace-nowrap
                        ${isFeatured ? 'bg-[#C9A86A] text-[#1A2F4E] shadow-sm' : 'border border-[#C9A86A] text-[#C9A86A]'}
                     `}>
                        รายได้คาดการณ์: {step.incomeProjection}
                     </div>
                   </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-center text-xs text-[#F9F6F0]/60 max-w-2xl mx-auto px-4">
        * เส้นทางมาตรฐานของทีมพี่ ผลจริงขึ้นกับความตั้งใจและการลงมือทำของแต่ละบุคคล
      </div>
    </SectionWrapper>
  );
}
