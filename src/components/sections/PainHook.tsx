import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { AlertCircle, Clock, TrendingDown } from 'lucide-react';

export function PainHook() {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-gold-500 mb-4" />,
      title: "ทำงานหนัก แต่ไม่มีเวลา",
      desc: "ตื่นเช้า ฝ่ารถติด กลับบ้านค่ำ ไม่มีเวลาให้ครอบครัวหรือตัวเอง"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-gold-500 mb-4" />,
      title: "รายได้ทางเดียว ไม่พอใช้",
      desc: "เงินเดือนขึ้นปีละนิด แต่ค่าครองชีพพุ่ง ไม่รู้จะหาทางออกยังไง"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-gold-500 mb-4" />,
      title: "อยากมีธุรกิจ แต่ไม่มีทุน",
      desc: "อยากทำอะไรเป็นของตัวเอง แต่กลัวความเสี่ยง ไม่รู้จะเริ่มตรงไหน"
    }
  ];

  return (
    <SectionWrapper bgWhite>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          คุณกำลังเจอปัญหาเหล่านี้อยู่ใช่ไหม?
        </h2>
        <p className="text-lg text-gray-600">
          หลายคนที่พี่สกุณาได้คุยด้วยตอนแรก ก็มีความกังวลแบบเดียวกันนี้ 
          จนกระทั่งพวกเขาได้พบกับระบบที่ใช่
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pains.map((pain, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border-l-4 border-l-gold-500 border-y border-r border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            {pain.icon}
            <h3 className="text-xl font-bold text-navy-900 mb-3">{pain.title}</h3>
            <p className="text-gray-600 leading-relaxed">{pain.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
