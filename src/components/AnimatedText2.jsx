import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="absolute bottom-4/4 right-10 text-white text-8xl font-bold text-left mt-36 " 
    >
      <span className="block">Crea la marca de tus sueños</span>
      
    </div>
  );
};

export default AnimatedText2;