import React, { useRef, useState, useEffect } from 'react'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const Parallax = ({children, className="", id, endX,endY,offsetX=0,offsetY=0,fitSection=false}) => {
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    if (fitSection) "return"; 
    

    useEffect(()=>{
        const targetElement = ref.current;
        targetElement.style.transform = `translate(${-offsetX}px,${-offsetY}px)`;

        window.addEventListener('scroll', () => {
            // 1. Calculate how far the user has scrolled (0 to 1)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            // Prevent division by zero if the page isn't scrollable
            if (maxScroll <= 0) return; 
            
            const scrollProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

            // 2. Apply the Ease-In-Out formula (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
            // Starts slow, accelerates toward location and deccelerates
            const easedProgress = easeInOutQuad(scrollProgress);
            const progressX = -((endX != null ? endX : window.innerWidth) * easedProgress) + offsetX;
            const progressY = -((endY != null ? endY : window.innerHeight) * easedProgress) + offsetY;

            // 3. Apply the eased value to an element
            if (targetElement) {
                // targetElement.style.right = ((window.innerWidth * easedProgress) + offset) + "px";
                targetElement.style.transform = `translate(${progressX}px,${progressY}px)`;
            }
        });
    },[0]);

    return (
        <div id={id} ref={ref} className={className + " relative"}>
            {children}
        </div>
    )
}

export default Parallax