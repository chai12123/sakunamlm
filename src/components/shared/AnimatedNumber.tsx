import React, { useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface Props {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ value, duration = 1.5, prefix = '', suffix = '', className = '' }: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toLocaleString());
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
