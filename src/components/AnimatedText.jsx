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
      className="text-white text-4xl font-bold text-left  mt-40" // Ajusta el margen superior aquí
    >
      <span className="block">Crea</span>
      <span className="block">para</span>
      <span className="block">el futuro</span>
    </div>
  );
 
};

export default AnimatedText;