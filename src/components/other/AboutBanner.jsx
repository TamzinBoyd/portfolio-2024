import usePageSizeCheck from "../../hooks/usePageSizeCheck";
import Brush from "../../assets/svgs/Brush";
import Design from "../../assets/svgs/Design";
import Game from "../../assets/svgs/Game";
import Hiking from "../../assets/svgs/Hiking";
import Horse from "../../assets/svgs/Horse";
import Music from "../../assets/svgs/Music";
import ContactLink from "../footer/ContactLink";
import Email from "../../assets/svgs/Email";


const AboutBanner = () => {
	let { width } = usePageSizeCheck();

	if (width === undefined) {
		width = 802;
	}

	return (
		<div className='about-banner bg-secondary relative overflow-visible left-1/2 w-screen transform -translate-x-1/2 flex flex-col items-center justify-center py-5'>
			<div className='flex items-center justify-center gap-2 md:gap-4'>
				<Design />
				<Horse />
				<Game />
				<Brush />
				<Hiking />
				<Music />
			</div>
			<p className='text-xl text-center text-primary font-normal mx-auto mt-4'>
				If you think I could be a good fit for your team then I&apos;d love to hear from you!
			</p>
			<div id='contact'>
				<span className='flex justify-center items-center gap-4 mt-4'>
					<div className='w-12 h-12 rounded-full bg-accent flex justify-center items-center'>
						<ContactLink
							href='mailto:tamzin_boyd@hotmail.co.uk'
							ariaLabel='Email Tamzin'
						>
							<Email hover='hover:fill-primary' />
						</ContactLink>{" "}
					</div>

					<a
						href='/TamzinBoydCV.pdf'
						download
						aria-label='Download my CV'
						className='p-4 bg-accent rounded w-48 hover:bg-primary text-center'
					>
						Download CV
					</a>
				</span>
			</div>
		</div>
	);
};

export default AboutBanner;
