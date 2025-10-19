import TemplatePage from '../components/TemplatePage';
import Blank from '../components/other/Blank';
import ContentSection from '../components/content/ContentSection';
import AboutBanner from '../components/other/AboutBanner';
import Quiz from '../components/other/Quiz';

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
				<p className='font-bold text-center mx-auto mb-0'>
					If you think I could be a good fit for your team then I&apos;d love to hear from you!
				</p>
			</ContentSection>
			<AboutBanner />
			{/* <Quiz /> */}
		</TemplatePage>
  )
}

export default About
