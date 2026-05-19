import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Check, X, AlertTriangle } from 'lucide-react';

type ComparisonRow = {
  label: string;
  traditional: {
    icon: '❌' | '⚠️';
    text: string;
  };
  business: {
    icon: '✅';
    text: string;
  };
};

const comparisonData: ComparisonRow[] = [
  {
    label: 'เวลาทำงาน',
    traditional: { icon: '❌', text: 'กำหนดแน่นอน 8-9 ชม./วัน' },
    business: { icon: '✅', text: 'อิสระ เลือกเวลาเองได้' },
  },
  {
    label: 'รายได้',
    traditional: { icon: '⚠️', text: 'คงที่ ขึ้นปีละ 3-5%' },
    business: { icon: '✅', text: 'ไร้ขีดจำกัด ตามผลงาน' },
  },
  {
    label: 'สถานที่',
    traditional: { icon: '❌', text: 'ต้องเข้าออฟฟิศ' },
    business: { icon: '✅', text: 'ทำที่ไหนก็ได้ มีแค่มือถือ' },
  },
  {
    label: 'โอกาสเติบโต',
    traditional: { icon: '⚠️', text: 'รอคนเก่าออก/เลื่อนตามอายุ' },
    business: { icon: '✅', text: 'โตได้ทันทีที่พร้อม' },
  },
  {
    label: 'การส่งต่อ (มรดก)',
    traditional: { icon: '❌', text: 'ส่งต่อให้ลูกไม่ได้' },
    business: { icon: '✅', text: 'ส่งต่อรายได้ให้ครอบครัวได้' },
  },
];

export function ComparisonTable() {
  return (
    <SectionWrapper bgWhite>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          ทำไมถึงต้องเลือกทางนี้?
        </h2>
        <p className="text-lg text-gray-600">
          เปรียบเทียบให้เห็นชัดๆ ว่าสิ่งที่คุณมุ่งมั่นทุ่มเทในวันนี้ จะให้อะไรคุณบ้างในอนาคต
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Desktop Header */}
        <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-0">
          <div className="p-4"></div>
          <div className="p-4 bg-[#F5F5F5] text-navy-900 font-bold text-center rounded-tl-xl border-b border-gray-200">
            งานประจำทั่วไป
          </div>
          <div className="p-4 bg-[#1A2F4E] text-[#F9F6F0] font-bold text-center rounded-tr-xl border-b-[3px] border-gold-500">
            ธุรกิจร่วมกับทีมพี่
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-6 md:gap-0">
          {comparisonData.map((row, idx) => {
            // Subtle alternating background colors for desktop
            const isOdd = idx % 2 !== 0;
            const tradBgMobile = 'bg-white';
            const tradBgDesktop = isOdd ? 'md:bg-[#EBEBEB]' : 'md:bg-[#F5F5F5]';
            const bizBgMobile = 'bg-[#1A2F4E]';
            const bizBgDesktop = isOdd ? 'md:bg-[#162742]' : 'md:bg-[#1A2F4E]';
            const labelBgDesktop = isOdd ? 'md:bg-black/[0.02]' : 'md:bg-transparent';

            return (
              <div 
                key={idx} 
                className="flex flex-col md:grid md:grid-cols-[200px_1fr_1fr] border border-gray-100 md:border-0 md:border-b md:border-[#E8E0D5] rounded-xl md:rounded-none overflow-hidden hover:shadow-md md:hover:shadow-none transition-shadow"
              >
                {/* Mobile Label / Desktop Column 1 */}
                <div className={`bg-gray-100 p-3 md:p-4 font-bold text-navy-900 text-center md:text-right flex items-center justify-center md:justify-end md:pr-6 border-b border-gray-200 md:border-0 ${labelBgDesktop}`}>
                  {row.label}
                </div>

                {/* Traditional Column */}
                <div className={`p-4 text-[#333333] flex items-center justify-start md:justify-center gap-3 md:border-r border-gray-200 ${tradBgMobile} ${tradBgDesktop}`}>
                  <span className="md:hidden text-xs font-semibold text-gray-400 w-24 shrink-0 uppercase tracking-wide">งานประจำ:</span>
                  <div className="flex items-center gap-2">
                    {row.traditional.icon === '❌' 
                      ? <X size={20} className="text-[#A84A3B] shrink-0" /> 
                      : <AlertTriangle size={20} className="text-[#C9A86A] shrink-0" />}
                    <span>{row.traditional.text}</span>
                  </div>
                </div>

                {/* Business Column */}
                <div className={`p-4 text-[#F9F6F0] flex items-center justify-start md:justify-center gap-3 ${bizBgMobile} ${bizBgDesktop}`}>
                  <span className="md:hidden text-xs font-semibold text-gold-500/80 w-24 shrink-0 uppercase tracking-wide">ทีมพี่สกุณา:</span>
                  <div className="flex items-center gap-2">
                    <Check size={20} className="text-[#8FA889] shrink-0" />
                    <span className="font-medium md:font-normal">{row.business.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Desktop Footer Border Radian / Filler */}
          <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-0">
            <div></div>
            <div className="h-4 bg-[#F5F5F5] rounded-bl-xl border-t border-[#E8E0D5]"></div>
            <div className="h-4 bg-[#1A2F4E] rounded-br-xl border-t border-[#E8E0D5]"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
