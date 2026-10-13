import React from 'react'
import { useRef } from 'react';

const NavItem = ({id,className,href,icon, external=false}) => {
	const navItemRef = useRef(null);

	const handleHrefClick = (e) => {
		if (!external) {
			e.preventDefault();
			const href = navItemRef.current.getAttribute('href');
			document.getElementById(`${href}`).scrollIntoView({ behavior:'smooth'});
		}
	}

	return (
		<div className="nav-item-con">
			<div className="nav-item">
				<div className={(icon ? `nav-icon-${icon} ` : "") + "nav-item-image"}></div>
				<a ref={navItemRef} href={`${href}`} onClick={handleHrefClick}>
				</a>
			</div>
		</div>
	)
}

export default NavItem