import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className='header sticky top-0 z-10 w-full h-12 p-8 flex justify-end items-center bg-primary 2xl:p-16'>
			<div className='header__links flex items-center gap-8'>
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
			</div>
			{/* <div className='ml-8 flex'>
				<input
					type='checkbox'
					className='toggle toggle-accent'
					checked
					aria-label='toggle light dark mode'
				/>
			</div> */}
		</nav>
	);
};

export default Header;
