import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Marquee = ({ text }: { text: string }) => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marqueeContentRef.current;

    // @ts-ignore
    const marqueeWidth = marquee.offsetWidth;
    // @ts-ignore
    const marqueeContentWidth = marqueeContent.offsetWidth;

    if (marqueeContentWidth > marqueeWidth) {
      gsap.to(marqueeContent, {
        // @ts-ignore
        x: -marqueeContent.offsetWidth,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: (x) => {
            // @ts-ignore
            if (x < -marqueeContent.offsetWidth) {
              return 0;
            }
            return x;
          },
        },
        duration: 10,
      });
    }

    return () => {
      gsap.killTweensOf(marqueeContent);
    };
  }, []);

  return (
    <div ref={marqueeRef} className="marquee">
      <div
        ref={marqueeContentRef}
        className="marquee-content w-fit text-2xl whitespace-nowrap text-white">
        {text}
      </div>
    </div>
  );
};

export default Marquee;
