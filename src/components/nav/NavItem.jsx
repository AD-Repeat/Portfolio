import React from 'react'
import { useRef } from 'react';

const NavItem = ({ children, id, className, itemText, href, icon, external = false }) => {
	const navItemRef = useRef(null);

	const handleHrefClick = (e) => {
		const href = navItemRef.current.getAttribute('href');
		if (!external) {
			e.preventDefault();
			document.getElementById(`${href}`).scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if ("/Portfolio" + href == window.location.pathname + (window.location.hash.split("#/").pop())) {
			e.preventDefault();
		}
	}

	return (
		<li>
			<div className={'nav-item' + (children ? " nav-item-list" : "")}>
				<a ref={navItemRef} href={`${href ? href : ""}`} onClick={handleHrefClick}>
					<div className="nav-item-icon-con">
						<div className="nav-item-icon">
							<div className={(icon ? `nav-icon-${icon} ` : "") + "nav-item-image"}></div>

						</div>
					</div>
					<div className='nav-item-text-con'>
						<h3 className='nav-item-text'>{itemText}</h3>
					</div>
				</a>
				{children
					? <ul>
						{children}
					</ul>
					: ""
				}
			</div>
		</li>
	)
}

export default NavItem