import NavItem from "@/components/nav/NavItem"
import React, { useRef, useEffect } from 'react';
import '@/components/nav/Nav.css';

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
                <NavItem href="Hero" icon="user"></NavItem>
                <NavItem href="About" icon="about"></NavItem>
                <NavItem href="Projects" icon="projects"></NavItem>
                <NavItem href="Contacts" icon="contact"></NavItem>
            </div>
            <div id="Nav-button-con" onClick={handleNavBtnClick}>
                <div id="Nav-button">
                    <div id="Nav-button-arrow" ref={NavArrowRef} className="nav-item-image"></div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav