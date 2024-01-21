import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const Scroll = ({ children, delay, origin }) => {
  const sectionRef = useRef();
  
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: false,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        distance: "30px",
        duration: 1000,
        desktop: true,
        mobile: true,
        delay: delay,
        origin: origin,
      });
    }
  },[sectionRef, delay, origin]);

  return (<div class="load-hidden" ref={sectionRef}>{children}</div>)
}

export{ Scroll }
