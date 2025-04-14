'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

const LED = ({ className, delay }: { className?: string; delay: number }) => {
  useEffect(() => {
    gsap.fromTo(
      '.light',
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
  }, []);
  return (
    <span
      className={`light block bg-green-500 rounded-full h-3 w-3 ${className}`}></span>
  );
};

export default LED;
