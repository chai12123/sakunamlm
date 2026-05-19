import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';
import { images, handleImageError } from '../../assets/images';

// ⚠️ LEGAL WARNING:
// นี่คือ mock data ห้ามนำขึ้น production จริงโดยไม่แก้ไขเป็นเรื่องจริงของทีมงาน
// TODO: Replace with real testimonial texts and real/placeholder images. Use picsum if anonymous.
const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'คุณหนึ่ง',
    role: 'อดีตพนักงานประจำ (Gold Level)',
    content: 'พี่สกุณาสอนแบบไม่มีกั๊ก ระบบที่ทีมให้มาทำให้ทำงานง่ายมาก จากคนที่ไม่เคยขายของมาก่อน ตอนนี้มีรายได้เสริมแซงเงินเดือนประจำไปแล้วค่ะ',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Nung'
  },
  {
    id: 't2',
    name: 'คุณชัย',
    role: 'เจ้าของธุรกิจส่วนตัว (Silver Level)',
    content: 'ผมหาธุรกิจที่ลงทุนน้อยแต่มีระบบรองรับชัดเจน มาเจอทีมนี้ตอบโจทย์มาก รูปแบบการสอนเป็น step by step เสียเวลาแค่วันละ 2-3 ชม. ก็สร้างทีมได้',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Chai'
  },
  {
    id: 't3',
    name: 'คุณมายด์',
    role: 'แม่บ้านฟูลไทม์ (Bronze Level)',
    content: 'เลี้ยงลูกอยู่บ้านก็ทำได้ค่ะ ไม่ต้องออกไปส่งของเอง มีเวลาดูแลลูกเต็มที่ และยังมีรายได้เข้าบ้านทุกสัปดาห์ ดีใจที่ตัดสินใจทักพี่ไปวันนั้น',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Mind'
  }
];

export function Testimonials() {
  return (
    <SectionWrapper bgWhite>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          เสียงจากลูกทีมของพี่
        </h2>
        <p className="text-lg text-gray-600">
          ความสุขของพี่ ไม่ใช่แค่รายได้ของตัวเอง แต่คือการเห็นน้องๆ ในทีมมีชีวิตที่ดีขึ้น
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#F9F6F0] p-8 rounded-3xl relative">
            <Quote className="absolute top-6 right-6 text-gold-400/20" size={60} />
            <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
              "{t.content}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={images.testimonials[t.id as keyof typeof images.testimonials]} 
                alt={t.name} 
                onError={handleImageError}
                className="w-14 h-14 rounded-full border border-white ring-2 ring-gold-500 ring-offset-2 ring-offset-[#F9F6F0] bg-white object-cover shrink-0" 
              />
              <div>
                <h4 className="font-bold text-navy-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-400 mt-10">
        * ผลลัพธ์ที่ได้ขึ้นอยู่กับความขยันหมั่นเพียรและการทำตามระบบของแต่ละบุคคล
      </p>
    </SectionWrapper>
  );
}
