import { SyntheticEvent } from 'react';
import { SAKUNA_HERO_BASE64, SAKUNA_ABOUT_BASE64 } from './embedded-images';

// TODO: (พี่สกุณา) เปลี่ยน URL รูปภาพ testimonials ด้านล่างนี้ให้เป็น URL ของรูปลูกทีมจริง 
// หรือเปลี่ยนเป็น import จากไฟล์ในเครื่องเมื่อมีไฟล์จริง
export const images = {
  hero: SAKUNA_HERO_BASE64,
  aboutSakuna: SAKUNA_ABOUT_BASE64,
  testimonials: {
    t1: 'https://i.pravatar.cc/200?img=47',
    t2: 'https://i.pravatar.cc/200?img=33',
    t3: 'https://i.pravatar.cc/200?img=23',
  }
};

// Fallback เมื่อโหลดรูปไม่สำเร็จ
export const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://placehold.co/600x400/eef2f6/3b5c87?text=Image+Placeholder';
};
