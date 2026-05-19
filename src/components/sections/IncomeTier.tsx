import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Tier } from '../../types';
import { Award, Shield, Crown, Diamond } from 'lucide-react';

export function IncomeTier() {
  const tiers: Tier[] = [
    {
      id: 'bronze',
      name: 'BRONZE',
      subtitle: 'สร้างฐานลูกค้า 3-5 คน',
      incomeRange: '10K - 30K',
      icon: <Award className="text-[#a57164]" size={32} /> // Bronze representation
    },
    {
      id: 'silver',
      name: 'SILVER',
      subtitle: 'สร้างทีม 2 สาย',
      incomeRange: '30K - 80K',
      icon: <Shield className="text-gray-300" size={32} /> // Silver representation
    },
    {
      id: 'gold',
      name: 'GOLD',
      subtitle: 'สร้างทีม 3-5 สาย',
      incomeRange: '80K - 200K',
      icon: <Crown className="text-gold-500" size={32} /> // Gold representation
    },
    {
      id: 'diamond',
      name: 'DIAMOND',
      subtitle: 'ผู้นำทีมระดับสูง',
      incomeRange: '200K+',
      isCurrent: true,
      icon: <Diamond className="text-cyan-400" size={32} /> // Diamond representation
    }
  ];

  return (
    <SectionWrapper id="income" bgNavy>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          4 ระดับรายได้ในทีมพี่
        </h2>
        <p className="text-gold-300 text-lg">จากจุดเริ่มต้น สู่ความสำเร็จที่ส่งต่อได้</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {tiers.map((tier) => (
          <div 
            key={tier.id}
            className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border ${
              tier.isCurrent 
                ? 'bg-navy-800 border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                : 'bg-navy-800/50 border-navy-700'
            }`}
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
              <div className="w-16 h-16 rounded-full bg-navy-900 border border-navy-600 flex items-center justify-center shrink-0">
                {tier.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest">{tier.name}</h3>
                <p className="text-gray-400 text-sm md:text-base">{tier.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-inter font-black text-white">
                  {tier.incomeRange}
                </span>
                <span className="text-gray-400 ml-2 text-sm md:text-base">บาท/เดือน</span>
              </div>
              {tier.isCurrent && (
                <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full ml-4 whitespace-nowrap">
                  พี่อยู่ตรงนี้
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-400 mt-8">
        * ผลลัพธ์ขึ้นอยู่กับความพยายามและการทำงานร่วมกับทีมของแต่ละบุคคล ตัวเลขนี้เป็นค่าประมาณการจากสถิติของทีม
      </p>
    </SectionWrapper>
  );
}
