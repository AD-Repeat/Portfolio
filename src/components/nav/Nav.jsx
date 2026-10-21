import NavItem from "@/components/nav/NavItem"
import React, { useRef, useEffect, useState } from 'react';
import '@/components/nav/Nav.css';

const setNavSize = (nav) => {
    const root = document.documentElement;
    const NavStyle = window.getComputedStyle(nav);
    root.style.setProperty('--nav-size', `${NavStyle.width}`);
    console.log(getComputedStyle(root).getPropertyValue('--nav-size'));
}

function Nav() {
    const NavRef = useRef(null);

    useEffect(() => {
        setNavSize(NavRef.current);
    });


    const handleNavBtnClick = () => {
        if (NavRef.current.classList == "") {
            NavRef.current.classList.toggle("nav-open");
        } else {
            NavRef.current.classList.toggle("nav-close");
            NavRef.current.classList.toggle("nav-open");
        }
    };

    // Handle Smooth Scrolling of Nav
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <>
        <nav id="Nav" ref={NavRef} className="">
            <div>
                <ul id="Nav-items">
                    {/* <NavItem href="/" external={true} icon={"user"} itemText={"Home Page"}>
                    <NavItem href="Hero" icon="user" itemText={"Me"}></NavItem>
                    <NavItem href="About" icon="about" itemText={"About"}></NavItem>
                    <NavItem href="Projects" icon="projects" itemText={"Projects"}></NavItem>
                    <NavItem href="Contacts" icon="contact" itemText={"Contact"}></NavItem>
                </NavItem> */}

                    <NavItem href="/" external={true} icon={"user"} itemText={"Home Page"}>
                        <NavItem href="Hero" icon="user" itemText={"Me"}>
                            <NavItem href="Hero" icon="user" itemText={"Me"}>
                                <NavItem href="Hero" icon="user" itemText={"Me"}>

                                </NavItem>
                            </NavItem>
                        </NavItem>
                        <NavItem href="Hero" icon="user" itemText={"Me"}>
                            <NavItem href="Hero" icon="user" itemText={"Me"}>

                            </NavItem>
                        </NavItem>
                    </NavItem>

                    {/* <NavItem href={"#/about"} itemText={"About"} external={true}></NavItem> */}
                </ul>
                <div id="Nav-button-con" onClick={handleNavBtnClick}>
                    <div id="Nav-button">
                        <div id="Nav-button-arrow" className="nav-item-image nav-icon-arrow"></div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav