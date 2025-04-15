'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LED = ({ className, delay }: { className?: string; delay: number }) => {
  const ledRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ledRef.current) {
      gsap.fromTo(
        ledRef.current,
        {
          backgroundColor: 'grey',
        },
        {
          backgroundColor: '#22c55e',
          duration: 0.5,
          repeat: -1,
          repeatDelay: 1,
          delay: delay,
        }
      );
    }
  }, [delay]);

  return (
    <span
      ref={ledRef}
      className={`light inline-block bg-green-500 rounded-full h-3 w-3 ${className}`}
    ></span>
  );
};

export default LED;