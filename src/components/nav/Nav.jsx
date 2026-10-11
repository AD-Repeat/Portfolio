import NavItem from "@/components/nav/NavItem"
import React, { useRef, useEffect } from 'react';

function Nav() {
    const NavRef = useRef(null);
    const NavArrowRef = useRef(null);

    const handleNavBtnClick = () => {
        if (NavRef.current.classList == "") {
            NavRef.current.classList.toggle("nav-open");
            NavArrowRef.current.classList.toggle("nav-arrow-open");
        } else {
            NavRef.current.classList.toggle("nav-close");
            NavRef.current.classList.toggle("nav-open");
            NavArrowRef.current.classList.toggle("nav-arrow-close");
            NavArrowRef.current.classList.toggle("nav-arrow-open");
        }
    };

    // Handle Smooth Scrolling of Nav
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <>
        <nav id="Nav" ref={NavRef} className="">
            <div id="Nav-items">
                <div className="nav-item">
                    <div className="nav-item-con">
                        <div id="Nav-item-user" className="nav-item-image"></div>
                        <a href="Hero">
                        </a>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-con">
                        <div id="Nav-item-about" className="nav-item-image"></div>
                        <a href="#About">
                        </a>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-con">
                        <div id="Nav-item-projects" className="nav-item-image"></div>
                        <a href="#Projects">
                        </a>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-con">
                        <div id="Nav-item-contact" className="nav-item-image"></div>
                        <a href="#Contact">
                        </a>
                    </div>
                </div>
            </div>
            <div id="Nav-button" onClick={handleNavBtnClick}>
                <div id="Nav-button-con">
                    <div id="Nav-button-arrow" ref={NavArrowRef} className="nav-item-image"></div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav