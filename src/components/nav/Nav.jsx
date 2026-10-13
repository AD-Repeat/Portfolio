import NavItem from "@/components/nav/NavItem"
import React, { useRef, useEffect } from 'react';
import '@/components/nav/Nav.css';

function Nav() {
    const NavRef = useRef(null);
    const NavArrowRef = useRef(null);
    
    const handleNavBtnClick = () => {
        const NavItems = NavRef.current.querySelectorAll('.nav-item');
        if (NavRef.current.classList == "") {
            NavRef.current.classList.toggle("nav-open");
            NavArrowRef.current.classList.toggle("nav-arrow-open");

            NavItems.forEach(item => {
                item.querySelector('.nav-item-icon-con').classList.toggle("nav-item-open");
                item.querySelector('.nav-item-text-con').classList.toggle("nav-item-open");
            });
        } else {
            NavRef.current.classList.toggle("nav-close");
            NavRef.current.classList.toggle("nav-open");
            NavArrowRef.current.classList.toggle("nav-arrow-close");
            NavArrowRef.current.classList.toggle("nav-arrow-open");

            NavItems.forEach(item => {
                item.querySelector('.nav-item-icon-con').classList.toggle("nav-item-close");
                item.querySelector('.nav-item-text-con').classList.toggle("nav-item-close");
                item.querySelector('.nav-item-icon-con').classList.toggle("nav-item-open");
                item.querySelector('.nav-item-text-con').classList.toggle("nav-item-open");
            });
        }
    };

    // Handle Smooth Scrolling of Nav
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <>
        <nav id="Nav" ref={NavRef} className="">
            <div id="Nav-items">
                <NavItem href="Hero" icon="user" itemText={"Me"}></NavItem>
                <NavItem href="About" icon="about" itemText={"About"}></NavItem>
                <NavItem href="Projects" icon="projects" itemText={"Projects"}></NavItem>
                <NavItem href="Contacts" icon="contact" itemText={"Contact"}></NavItem>
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