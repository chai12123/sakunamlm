import React from 'react';

export interface Tier {
  id: string;
  name: string;
  subtitle: string;
  incomeRange: string;
  icon: React.ReactNode;
  isCurrent?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RoadmapStep {
  stepNumber: number;
  day: string;
  title: string;
  description: string;
  income: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ActivityItem {
  id: string;
  name: string;
  action: string;
  timeAgo: string;
}
