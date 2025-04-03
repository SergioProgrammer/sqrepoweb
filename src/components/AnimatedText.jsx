import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = () => {
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
      className="text-white text-2xl font-bold text-left  mt-40" // Ajusta el margen superior aquí
    >
      <span className="block">Diseño Web</span>
      <span className="block">Marketing</span>
    </div>
  );
 
};

export default AnimatedText;