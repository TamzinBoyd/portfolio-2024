import { useState } from "react";
import NavMenu from "./NavMenu";

const MobileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='mobile-menu relative z-10'>
			<button className='md:hidden p-2' onClick={toggleMenu}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					className='inline-block w-8 h-8 stroke-current'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1'
						d='M4 6h16M4 12h16M4 18h16'
					></path>
				</svg>
			</button>
			{isMenuOpen && <NavMenu closeMenu={toggleMenu} />}
		</div>
	);
};

export default MobileMenu;
