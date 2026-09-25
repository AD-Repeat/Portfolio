import React, { useRef, useState, useEffect } from 'react'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// function createBlur(){
//     const svgNS = "http://w3.org";
//     const svg = document.createElementNS(svgNS, "svg");

//     React.createElement()

//     // Define the Gaussian blur filter
//     const defs = document.createElementNS(svgNS, "defs");
//     const filter = document.createElementNS(svgNS, "filter");
//     filter.setAttribute("id", "blur-effect");

//     const gaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
//     gaussianBlur.setAttribute("stdDeviation", "5"); // Blur intensity
//     filter.appendChild(gaussianBlur);
//     defs.appendChild(filter);
//     svg.appendChild(defs);

//     // Create a vector circle shape
//     const circle = document.createElementNS(svgNS, "circle");
//     circle.setAttribute("cx", "50");
//     circle.setAttribute("cy", "50");
//     circle.setAttribute("r", "25");
//     circle.setAttribute("fill", "red");

//     // Apply the filter via CSS or attribute
//     circle.setAttribute("filter", "url(#blur-effect)");
//     svg.appendChild(circle);

//     return svg;
// }

const ZoomParallax = ({children, className="", id, first=false, direction="left"}) => {
    const ref = useRef(null);
    // const blur = createBlur();

    useEffect(()=>{
        const targetElement = ref.current;

        window.addEventListener('scroll', () => {

            // Calculate how far the user has scrolled (0 to 1)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const container = targetElement.parentElement.getBoundingClientRect();

            const minScroll1 = scrollTop + container.y;
            const minScroll2 = scrollTop + container.y - container.height;

            let minScrollActual = first ? minScroll1 : minScroll2;
            
            const scrollProgress = Math.min(Math.max((Math.max(scrollTop, minScrollActual) - minScrollActual) / container.height, 0), 1);

            // Apply the Ease-In-Out formula (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
            // Starts slow, accelerates toward location and deccelerates
            const easedProgress = easeInOutQuad(scrollProgress);

            targetElement.style.transform = `translate(0px,${-100 * easedProgress}px)`;
            targetElement.style.filter = `blur(${20 * easedProgress}px)`;

            // Apply the eased value to an element
            if (targetElement) {
                // targetElement.style.right = ((window.innerWidth * easedProgress) + offset) + "px";
            }
        });
    },[0]);

    return (
        <div id={id} ref={ref} className={(className ? className + "": "") + "transition-all duration-500 ease-out fixed h-full w-full"}>
            {children}
        </div>
    )
}

export default ZoomParallax