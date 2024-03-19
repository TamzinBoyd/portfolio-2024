import TemplatePage from '../components/TemplatePage';
import Blank from '../components/other/Blank';
import ContentSection from '../components/content/ContentSection';
import AboutBanner from '../components/other/AboutBanner';
import Quiz from '../components/other/Quiz';
import Email from '../assets/svgs/Email';
import ContactLink from '../components/footer/ContactLink';
import LinkedInIcon from '../assets/svgs/LinkedInIcon';

const About = () => {
  return (
    <TemplatePage>
			<Blank />
			<ContentSection
				heading='About'
				background='bg-[#FFD2C8]'
				marginBottom='0'
				paddingBottom='pb-14'
			>
				<p>
					I find joy in transforming creative visions into reality
					through the medium of clean, semantic code. Ever since I saw
					my first
					<span className='highlight'> hello world</span>, I&apos;ve been
					hooked. I&apos;m naturally organised and I view coding as an
					outlet for expressing creativity in a structured and
					methodical manner.
				</p>
				<p>
					My journey has been complemented by my professional
					experience in various industries, including construction and
					the charity sector. These diverse experiences have equipped
					me with a rich set of skills, like adaptability,
					communication and an innovative perspective in my approach
					to problem-solving.
				</p>
				<p>
					Beyond the realm of coding, I am{" "}
					<span className='highlight'>
						passionate about creating beautiful things
					</span>
					, whether it&apos;s digital art or a watercolour painting.
					Outside of the digital world I enjoy being outdoors and
					spending time with my horse and cat.
				</p>
				<AboutBanner />
				<div id='contact'>
					<p className='text-xl text-center text-secondary font-normal mx-auto mt-12 max-w-96'>
						If you think I could be a good fit for your team then
						I&apos;d love to hear from you!
					</p>
					<p className='text-center font-bold'>tamzin_boyd@hotmail.co.uk</p>
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

						<div className='w-12 h-12 rounded-full bg-accent flex justify-center items-center'>
							<ContactLink
								href='https://www.linkedin.com/in/tamzin-boyd-dev/'
								ariaLabel="View Tamzin's Linkedin Profile"
							>
								<LinkedInIcon hover='hover:fill-primary' />
							</ContactLink>
						</div>
					</span>
				</div>
			</ContentSection>
			<Quiz />
		</TemplatePage>
  )
}

export default About
