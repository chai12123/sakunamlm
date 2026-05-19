import React from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Button } from '../shared/Button';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-navy-900 text-white relative pt-20">
      <SectionWrapper bgNavy className="pb-10 pt-0">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมเริ่มต้นเส้นทางใหม่หรือยัง?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            พี่พร้อมพาคุณไปสู่ชีวิตที่คุณเลือกได้ ทักมาคุยกันก่อน ยินดีให้คำปรึกษาฟรีค่ะ
          </p>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            {/* TODO: Update with real LINE URL */}
            <Button variant="accent" size="lg" href="https://line.me/" className="gap-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <MessageCircle size={24} /> แอดไลน์คุยกับพี่ (เร็วสุด)
            </Button>
            
            {/* TODO: Update with real Phone Number */}
            <Button variant="outline" className="border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800 gap-3" href="tel:+66800000000">
              <Phone size={20} /> โทรคุยกับคุณสกุณา
            </Button>
            
            <a href="#appointment" className="text-gold-400 underline underline-offset-4 mt-2 text-sm flex items-center justify-center gap-2 hover:text-gold-300 transition-colors">
              <Calendar size={16} /> นัดเวลาคุยแบบส่วนตัว
            </a>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 mt-16 max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
             {/* TODO: Update Social Links */}
             <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-navy-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-navy-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/><circle cx="16.806" cy="7.196" r="1.06"/><path d="M20.597 5.22c-.596-.593-1.428-1.01-2.454-1.126-.957-.107-1.933-.146-2.923-.153-1.996-.013-4.004-.01-5.998.006-.977.008-1.943.048-2.89.155-1.025.116-1.857.533-2.454 1.126-.6.595-1.022 1.429-1.139 2.455-.108.959-.148 1.935-.156 2.924-.014 2-.01 4.004.006 5.999.008.977.049 1.943.157 2.89.117 1.024.538 1.859 1.139 2.454.596.595 1.428 1.022 2.454 1.14.957.108 1.933.148 2.922.155 1.995.014 4.003.01 5.997-.006.978-.008 1.944-.049 2.891-.157 1.025-.118 1.856-.545 2.454-1.14.6-.595 1.022-1.43 1.139-2.454.108-.947.149-1.913.156-2.891.013-1.995.01-3.999-.006-5.997-.008-.978-.049-1.944-.157-2.89-.117-1.026-.54-1.86-1.139-2.455zM12 18.232c-3.414 0-6.184-2.77-6.184-6.184S8.586 5.864 12 5.864 18.184 8.634 18.184 12 15.414 18.232 12 18.232zM12 7.484a4.516 4.516 0 1 0 0 9.032 4.516 4.516 0 0 0 0-9.032z"/></svg>
             </a>
          </div>
          <div className="text-gray-500 text-sm">
            <p className="mb-1">&copy; 2026 Sakuna Boybin | Uni Global Leader</p>
            <p>เว็บไซต์นี้ทำขึ้นเพื่อแบ่งปันข้อมูลและโอกาสทางธุรกิจ ไม่ถือเป็นการการันตีรายได้</p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-black/30 border border-white/10 rounded-xl p-4 md:p-6 max-w-5xl mx-auto mt-10 text-xs md:text-sm text-gray-400 text-left leading-relaxed">
          <p className="font-bold text-gray-300 mb-2">ข้อจำกัดความรับผิดชอบ (Legal Disclaimer)</p>
          <p>
            ข้อมูล ตัวเลข และรายได้ที่ปรากฏบนเว็บไซต์นี้ เป็นเพียงกรณีศึกษาหรือการประมาณการจากผลลัพธ์ของทีมงานบางส่วน 
            ผลลัพธ์ที่แท้จริงอาจมีความแตกต่างกันขึ้นอยู่กับปัจจัยหลายประการ ได้แก่ ความพยายามส่วนบุคคล 
            ทักษะทางธุรกิจ ความรู้ ประสบการณ์ และสภาวะตลาด 
          </p>
          <p className="mt-2">
            เว็บไซต์นี้ไม่ได้มีเจตนาเสนอขาย แนะนำ หรือรับประกันผลตอบแทนที่แน่นอน 
            โปรดศึกษาข้อมูลและเงื่อนไขของบริษัทอย่างละเอียดก่อนตัดสินใจเข้าร่วมธุรกิจ
          </p>
        </div>
      </SectionWrapper>
      
      {/* Bottom padding for mobile CTA bar */}
      <div className="h-20 md:h-0 w-full" />
    </footer>
  );
}
