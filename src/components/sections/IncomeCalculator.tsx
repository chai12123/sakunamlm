import React, { useState, useMemo } from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { SliderInput } from '../shared/SliderInput';
import { calculateIncome } from '../../utils/calculator';
import { AnimatedNumber } from '../shared/AnimatedNumber';
import { Button } from '../shared/Button';

export function IncomeCalculator() {
  const [hours, setHours] = useState(5);
  const [recruits, setRecruits] = useState(3);

  const [month6Income, month12Income] = useMemo(() => {
    return calculateIncome(hours, recruits);
  }, [hours, recruits]);

  return (
    <SectionWrapper className="bg-[#F9F6F0]">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl border-2 border-gold-500/20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
            คำนวณรายได้ของคุณ
          </h2>
          <p className="text-gray-500">ลองปรับตัวเลขเพื่อดูความเป็นไปได้</p>
        </div>

        <div className="space-y-8 mb-12">
          <SliderInput 
            label="ฉันจะทำเดือนละ (ชั่วโมง/สัปดาห์)"
            value={hours}
            min={1}
            max={40}
            step={1}
            unit="ชม."
            onChange={setHours}
          />
          <SliderInput 
            label="ฉันจะชวนเพื่อนได้ (คน/เดือน)"
            value={recruits}
            min={0}
            max={20}
            step={1}
            unit="คน"
            onChange={setRecruits}
          />
        </div>

        <div className="bg-[#F9F6F0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between border border-gold-300 m-[-.5rem] md:m-0 mb-8">
          <div className="text-center flex-1 w-full border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
            <p className="text-navy-900 font-semibold mb-2">รายได้คาดการณ์ เดือนที่ 6:</p>
            <div className="text-4xl md:text-5xl font-inter font-black text-navy-900 flex justify-center items-baseline gap-2">
              <AnimatedNumber value={month6Income} duration={0.8} />
              <span className="text-lg font-sans font-normal">บาท</span>
            </div>
          </div>
          
          <div className="text-center flex-1 w-full pt-2 md:pt-0">
            <p className="text-navy-900 font-semibold mb-2">รายได้คาดการณ์ เดือนที่ 12:</p>
            <div className="text-4xl md:text-5xl font-inter font-black text-gold-600 flex justify-center items-baseline gap-2">
              <AnimatedNumber value={month12Income} duration={1} />
              <span className="text-lg font-sans font-normal text-navy-900">บาท</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 mb-8">
          * ตัวเลขนี้เป็นเพียงการจำลองเพื่อความเข้าใจเท่านั้น ผลลัพธ์จริงขึ้นอยู่กับปัจจัยหลายประการ
        </p>

        <div className="text-center">
          {/* TODO: Add Line contact URL */}
          <Button variant="accent" href="#contact" size="lg" fullWidth className="md:w-auto">
            คำนวณเสร็จแล้ว ไปต่อเลย!
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
