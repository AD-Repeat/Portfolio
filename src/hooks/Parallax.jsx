import React, { useRef, useState, useEffect } from 'react'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const Parallax = ({children, className="", id, first=false, direction="left"}) => {
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    switch (direction) {
        case "left":
            
            break;
        case "right":
            
            break;
    
        default:
            break;
    }

    useEffect(()=>{
        const targetElement = ref.current;

        window.addEventListener('scroll', () => {

            // 1. Calculate how far the user has scrolled (0 to 1)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const container = targetElement.parentElement.getBoundingClientRect();

            const minScroll1 = scrollTop + container.y - container.height;
            const minScroll2 = scrollTop + container.y;

            let minScrollActual = first ? minScroll2 : minScroll1;
            
            const scrollProgress = Math.min(Math.max((Math.max(scrollTop, minScrollActual) - minScrollActual) / container.height, 0), 1);

            // if (id == "Hero-Parallax") console.log(scrollProgress, minScroll1, Math.min(scrollTop, scrollTop + (container.height + container.y)), maxScroll);
            if (id == "Projects") console.log(Math.min(Math.max((Math.max(scrollTop, minScroll1) - minScroll1) / container.height, 0), 1));

            // 2. Apply the Ease-In-Out formula (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
            // Starts slow, accelerates toward location and deccelerates
            const easedProgress = easeInOutQuad(scrollProgress);
            const progressX = -(window.innerWidth * easedProgress);
            const progressY = -(window.innerHeight * easedProgress);

            // 3. Apply the eased value to an element
            if (targetElement) {
                // targetElement.style.right = ((window.innerWidth * easedProgress) + offset) + "px";
                targetElement.style.transform = `translate(${progressX}px,${progressY}px)`;
            }
        });
    },[0]);

    return (
        <div id={id} ref={ref} className={className + " transition-all duration-500 ease-out fixed h-full w-full"}>
            {children}
        </div>
    )
}

export default Parallax