import { Link } from "react-router-dom";
const NavMenu = ({ closeMenu }) => {
	return (
		<div className='fixed inset-0 bg-primary h-full transition-all ease-out duration-500 md:transition-none'>
			<div className='absolute top-0 right-0 p-4'>
				<button onClick={closeMenu}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
			</div>
			<div className='h-screen'>
				<ul className='text-secondary pt-16 pl-8 flex flex-col gap-4'>
					<Link
						to='/'
						aria-label='link to homepage'
						className='text-secondary text-lg hover:text-accent uppercase m-0 2xl:text-5xl'
					>
						Home
					</Link>
					<Link
						to='/projects'
						aria-label='link to projects page'
						className='text-secondary text-lg hover:text-accent uppercase m-0 2xl:text-5xl'
					>
						Projects
					</Link>
					<Link
						to='/experience'
						aria-label='link to experience page'
						className='text-secondary text-lg hover:text-accent uppercase m-0 2xl:text-5xl'
					>
						Experience
					</Link>
					<Link
						to='/about'
						aria-label='link to about page'
						className='text-secondary text-lg hover:text-accent uppercase m-0 2xl:text-5xl'
					>
						About
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default NavMenu;
