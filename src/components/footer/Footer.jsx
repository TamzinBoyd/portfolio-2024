import LinkedInIcon from "../../assets/svgs/LinkedInIcon";
import Github from "../../assets/svgs/Github";
import Email from "../../assets/svgs/Email";
import ContactLink from "./ContactLink";
import usePageSizeCheck from "../../hooks/usePageSizeCheck";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const breakpoint = 801;
	let { width } = usePageSizeCheck();

	if (width === undefined) {
		width = 802;
	}

	return (
		<footer className='footer fixed bottom-0 flex flex-col-reverse gap-2 md:grid items-center py-2 px-8 bg-primary text-secondary 2xl:py-8'>
			<aside className='items-center flex md:grid-flow-col'>
				<p className='text-xs m-0'>
					Copyright © {currentYear} - All rights reserved
				</p>
			</aside>
			<div className='flex items-center md:grid-flow-col md:gap-4 md:place-self-center md:justify-self-end 2xl:gap-8'>
				<ContactLink
					href='https://www.linkedin.com/in/tamzin-boyd-dev/'
					ariaLabel="View Tamzin's Linkedin Profile"
				>
					<LinkedInIcon />
				</ContactLink>
				<ContactLink
					href='mailto:tamzin_boyd@hotmail.co.uk'
					ariaLabel='Email Tamzin'
				>
					<Email />
				</ContactLink>
				<ContactLink
					href='https://github.com/TamzinBoyd'
					ariaLabel="View Tamzin's Github Profile"
				>
					<Github />
				</ContactLink>
			</div>
		</footer>
	);
};

export default Footer;
