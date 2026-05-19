import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { ShoppingBag, Users, Zap } from 'lucide-react';

export function IncomeStreams() {
  const streams = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-navy-900" />,
      title: "กำไรจากการขายปลีก",
      desc: "กำไรส่วนต่างทันทีที่ขายสินค้าได้ ไม่ต้องสต๊อก ไม่ต้องส่งเอง ระบบจัดการให้หมด"
    },
    {
      icon: <Users className="w-10 h-10 text-navy-900" />,
      title: "รายได้จากการขยายทีม",
      desc: "เมื่อมีคนสนใจร่วมธุรกิจกับคุณ คุณจะได้รับผลตอบแทนจากการสร้างทีม"
    },
    {
      icon: <Zap className="w-10 h-10 text-navy-900" />,
      title: "รายได้รวมของทีม",
      desc: "ยิ่งทีมเติบโต คุณยิ่งได้โบนัส เป็น Passive Income ในระยะยาว"
    }
  ];

  return (
    <SectionWrapper bgWhite>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          รายได้ของเรามาจากไหน?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ธุรกิจที่โปร่งใส ตรวจสอบได้ทุกขั้นตอน เราสร้างรายได้จากการกระจายสินค้าสู่ผู้บริโภคจริง 
          โดยคุณสามารถมีรายได้หลายทาง
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {streams.map((stream, idx) => (
          <div key={idx} className="bg-[#F9F6F0] p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              {stream.icon}
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">{stream.title}</h3>
            <p className="text-gray-600 leading-relaxed">{stream.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
