import React from 'react'
import { useRef } from 'react';

const NavItem = ({ id, className, itemText, href, icon, external = false }) => {
	const navItemRef = useRef(null);

	const handleHrefClick = (e) => {
		if (!external) {
			e.preventDefault();
			const href = navItemRef.current.getAttribute('href');
			document.getElementById(`${href}`).scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<a ref={navItemRef} href={`${href}`} onClick={handleHrefClick}>
			<div className='nav-item'>
				<div className="nav-item-icon-con">
					<div className="nav-item-icon">
						<div className={(icon ? `nav-icon-${icon} ` : "") + "nav-item-image"}></div>

					</div>
				</div>
				<div className='nav-item-text-con'>
					<h3 className='nav-item-text'>{itemText}</h3>
				</div>
			</div>
		</a>
	)
}

export default NavItem