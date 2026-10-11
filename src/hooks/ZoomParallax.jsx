import React, { useRef, useState, useEffect } from 'react'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

const ZoomParallax = ({children, className="", id}) => {
    const ref = useRef(null);
    // const blur = createBlur();

    useEffect(()=>{
        const targetElement = ref.current;

        window.addEventListener('scroll', () => {

            // Calculate how far the user has scrolled (0 to 1)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Container of the parallax
            const container = targetElement.parentElement.getBoundingClientRect();

            // First Y location of the Parallax container
            const sectionStart = scrollTop + container.y;

            // Value for the bottom of the page
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            // How much progress from top of page to bottom (in percentage)
            const bottomScrollProgress = Math.min(Math.max(Math.max((Math.max(scrollTop, sectionStart) - sectionStart),0) / maxScroll, 0), 1);

            // How much progress from top of section to bottom (in percentage)
            // const sectionToBottomScrollProgress = sectionStart > 0 ? Math.min(Math.max(scrollTop,0) / sectionStart, 1) : 1;

            // How much progress from top of container to bottom of container (in percentage)
            const sectionScrollProgress = Math.min(Math.max((sectionStart - Math.max(scrollTop,sectionStart - container.height))/container.height,-1),1);

            // Apply the Ease-In-Out formula (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
            // Starts slow, accelerates toward location and deccelerates
            const bsp_eio = easeInOutQuad(bottomScrollProgress);
            const ssp_eo = easeOutQuad(1 - Math.max(sectionScrollProgress, 0));

            const translateVal = Math.max((sectionStart > 0 ? -(scrollTop + container.y - container.height) - container.height * ssp_eo : -(scrollTop + container.y) * ssp_eo), -scrollTop - container.y - container.height) - 500 * bsp_eio;
            const scaleVal = 1 - bsp_eio * 0.5;
            const blurVal = 100 * bsp_eio;

            targetElement.style.transform = `translate(0px,${translateVal}px) scale(${scaleVal})`;
            targetElement.style.filter = `blur(${blurVal}px)`;
        });
    },[0]);

    return (
        <div id={id} ref={ref} className={(className ? className + "": "") + "transition-all duration-500 ease-out fixed h-full w-full"}>
            {children}
        </div>
    )
}

export default ZoomParallax