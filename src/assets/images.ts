import { SyntheticEvent } from 'react';

// TODO: (พี่สกุณา) เปลี่ยน URL รูปภาพ testimonials ด้านล่างนี้ให้เป็น URL ของรูปลูกทีมจริง 
// หรือเปลี่ยนเป็น path /images/testimonial-X.jpg เมื่ออัพรูปเข้า public/images/ folder
export const images = {
  hero: '/images/sakuna-hero.jpg',
  aboutSakuna: '/images/sakuna-about.jpg',
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
