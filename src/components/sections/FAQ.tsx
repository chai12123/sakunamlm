import React, { useState } from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { AccordionItem } from '../shared/AccordionItem';
import { FAQItem } from '../../types';

const faqData: FAQItem[] = [
  {
    question: "Uni คืออะไร? น่าเชื่อถือไหม?",
    answer: "Uni เป็นบริษัทเครือข่ายระดับสากลที่มีสินค้าคุณภาพและได้รับการรับรองมาตรฐาน ทำธุรกิจอย่างถูกต้องตามกฎหมาย โปร่งใส แผนรายได้จ่ายจริงและตรวจสอบได้ทุกขึ้นตอนค่ะ"
  },
  {
    question: "ต้องลงทุนเยอะไหม?",
    answer: "การลงทุนที่นี่ไม่ใช่การเอาเงินก้อนมาทิ้ง แต่เป็นการซื้อบริโภคสินค้าคุณภาพเพื่อเริ่มต้นธุรกิจ มีหลากหลายแพ็คเกจที่คุณเลือกได้ตามความพร้อม ไม่ต้องสต๊อกของจำนวนมหาศาล"
  },
  {
    question: "ไม่มีประสบการณ์เลย ทำได้ไหม?",
    answer: "ทำได้แน่นอนค่ะ! ทีมพี่มีระบบสอนงาน 90 วันแรก (Roadmap) แบบจับมือทำตั้งแต่ศูนย์ ทั้งเรื่องสินค้า การขาย การสร้างทีม เราไม่ได้ปล่อยให้คุณทำคนเดียว"
  },
  {
    question: "ใช้เวลานานแค่ไหนกว่าจะเห็นผล?",
    answer: "ขึ้นอยู่กับความขยันของแต่ละคนค่ะ บางคนตั้งใจทำตามระบบ 1-2 สัปดาห์แรกก็เริ่มมีรายได้จากการขายปลีกแล้ว ถ้าทำต่อเนื่อง 3-6 เดือนจะเริ่มเห็นผลลัพธ์ที่เป็นกอบเป็นกำจากการทีมค่ะ แต่ย้ำว่า 'ไม่ใช่รวยข้ามคืน' นะคะ"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <SectionWrapper id="faq" bgWhite>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            คำถามที่พี่เจอบ่อย
          </h2>
          <p className="text-gray-600">ทุกข้อสงสัย มีคำตอบให้ชัดเจน ความโปร่งใสคือสิ่งที่พี่ให้ความสำคัญที่สุด</p>
        </div>

        <div className="bg-[#F9F6F0] rounded-2xl p-6 md:p-8">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.question}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
