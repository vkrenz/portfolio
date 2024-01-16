/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';
import baffle from 'baffle';

const BaffleText = ({ text }) => {
  const baffleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = baffle(baffleRef.current);
            target.set({
              characters:
                "経視常受気武会軽愛員口賞兆高笑準運府冬遠時読科康和換針均効意持融散国欧備屋茶数話>",
                speed: Math.random() * (200 - 50) + 50,
                delay: Math.random() * (100 - 10) + 10,
                duration: 2000,
            });
            target.start();
            target.reveal(1000, 100);
            observer.unobserve(entry.target); // Stop observing once the element is visible
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (baffleRef.current) {
      observer.observe(baffleRef.current);
    }

    return () => {
      if (baffleRef.current) {
        observer.unobserve(baffleRef.current);
      }
    };
  }, [text]);

  return <p ref={baffleRef} className="baffle">{text}</p>;
};

export default BaffleText;
