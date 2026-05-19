import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';

// ⚠️ LEGAL WARNING: 
// ห้ามนำไป deploy บน server จริงหากข้อมูลผู้คนเหล่านี้ไม่มีอยู่จริง หรือไม่มีการยินยอม!
// นี่เป็นเพียง mock data เพื่อทดสอบ UI
// TODO: ผูกกับ API หรือเปลี่ยนเป็นข้อมูลจริงที่มีหลักฐานยืนยันได้
const activities = [
  { id: '1', name: 'คุณ ว.', action: 'เพิ่งปิดยอด Silver', timeAgo: '2 นาทีที่แล้ว' },
  { id: '2', name: 'คุณ ส.', action: 'เพิ่งเข้าร่วมทีมพี่สกุณา', timeAgo: '15 นาทีที่แล้ว' },
  { id: '3', name: 'คุณ อ.', action: 'พิชิตเป้าหมายรายได้ 30K', timeAgo: '1 ชั่วโมงที่แล้ว' },
  { id: '4', name: 'คุณ ม.', action: 'เลื่อนขั้นเป็น Gold', timeAgo: '3 ชั่วโมงที่แล้ว' },
  { id: '5', name: 'คุณ น.', action: 'ส่งต่อความสำเร็จให้ทีม', timeAgo: '4 ชั่วโมงที่แล้ว' },
];

export function LiveActivityFeed() {
  return (
    <SectionWrapper bgWhite className="py-8 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 px-4 overflow-hidden">
        <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Live Updates
        </span>
        
        <div className="flex-1 w-full overflow-hidden relative">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-8">
            {/* Double the array for smooth infinite marquee */}
            {[...activities, ...activities].map((act, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-navy-900">{act.name}</span>
                <span className="text-gray-600">{act.action}</span>
                <span className="text-gray-400 text-xs">({act.timeAgo})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tailwind config needs to support marquee animation. We can add via inline CSS for ease here. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </SectionWrapper>
  );
}
