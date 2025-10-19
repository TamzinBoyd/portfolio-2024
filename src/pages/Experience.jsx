
import TemplatePage from "../components/TemplatePage";
import ContentSection from "../components/content/ContentSection";
import Blank from "../components/other/Blank";
import Javascript from "../assets/svgs/JS";
import Sass from "../assets/svgs/Sass";
import ReactIcon from "../assets/svgs/React";
import Typescript from "../assets/svgs/Typescript";
import Tailwind from "../assets/svgs/Tailwind";
import Git from "../assets/svgs/Git";
import GraphQl from "../assets/svgs/GraphQl";
import Quotes from "../assets/svgs/Quotes";

const Experience = () => {
	return (
		<TemplatePage>
			<Blank />
			<ContentSection heading='Experience' index={1}>
				<div className='flex flex-wrap gap-8 md:gap-14'>
					<div className='experience-skills flex grow w-full justify-center md:justify-between flex-wrap gap-4 p-4 md:p-0'>
						<Javascript />
						<Sass />
						<ReactIcon />
						<Typescript />
						<Tailwind />
						<Git />
						<GraphQl />
					</div>
					<div className='md:grid md:grid-cols-5 gap-12'>
						<div className='relative col-start-1 col-end-3 flex justify-center mb-12 md:mb-0'>
							<Quotes classes='lg:top-[20%]' />
							<h6 className='flex flex-col justify-center text-2xl font-bold text-center max-w-[200px] md:max-w-none'>
								Front-end web developer{" "}
								<span className='text-accent'>
									with industry experience
								</span>
									in a fast paced e-commerce agency
							</h6>
							<Quotes classes='rotate-180 lg:bottom-[20%]' />
						</div>
						<p className='col-start-3 col-end-6'>
							My journey with 5874, an innovative e-commerce agency, allowed me to utilise my front-end coding skills to contribute
							to crafting captivating digital storefronts.
							Originating from a coding bootcamp, my dedication
							over a year of self-paced learning solidified my
							expertise in JavaScript and React. A{" "}
							<span className='highlight'>versatile coder</span>,
							I navigated seamlessly through technologies like
							React, Handlebars and JavaScript, while mastering
							the art of styling with Sass and Tailwind. I bring
							an innovative approach to front-end development,
							coding digital experiences that seamlessly blend
							creativity and functionality.
						</p>
					</div>
				</div>
			</ContentSection>

			<ContentSection heading='Current' background='bg-primary' index={2}>
				<p>
					I recently broadened my skill set into project
					management, leading the roll out of a web-based market trading
					app. This role enhanced my skills in stakeholder communication,
					problem-solving, and project oversight, while giving me valuable
					insight into digital projects from the {" "}
					<span className='highlight'>
						client's perspective.
					</span>
					In a dynamic role focused on delivering a market trading web app from initial scoping to launch, I collaborated with stakeholders, agencies, and internal teams to ensure timely delivery and brand consistency. I maintain clear communication with key stakeholders, manage expectations, and work closely with an agency to identify and resolve blockers.
				</p>
				<p>
					As part of the Marketing team, I align digital output with brand standards and coordinate customer journeys and communications. My contributions included developing front-end React components, delivering demos and training materials, and supporting additional projects by analysing feedback to shape product roadmaps. Operating within an agile framework, I address bugs, implement changes, and deliver new features, utilising using tools such as Monday, Notion, and BugHerd.{" "}
				</p>
			</ContentSection>

			<ContentSection heading='Past' index={3}>
				<p>
					From August 2022 to June 2024 I was immersed in the world of web
					development at 5874. Beginning as a junior developer I
					showcased my skills and my dedication earnt a promotion
					within six months. In this fast-paced agency, I actively
					contributed to the creation of a diverse range of e-commerce
					sites, leaving my mark on{" "}
					<span className='highlight'>
						international client sites{" "}
					</span>
					like Tile Warehouse, Loacker, Mona, Tackle Direct, and Big
					Finish. The agency's innovative approach and adaptability to
					evolving technologies has provided me with valuable
					experience across various frameworks and libraries, such as
					React, Handlebars, Stencil, Statamic, Antlers, Alpine JS and
					Tailwind.
				</p>
				<p>
					The stores use BigCommerce which means making{" "}
					<span className='highlight'>API and GraphQl calls</span> for
					product data and establishing connections with third-party
					entities like Trustpilot. For headless sites, Builder IO
					serves as the CMS, with React and Typescript for the front
					end. This includes coding reusable custom components.
				</p>

				<p>
					I pride myself on making pixel-perfect components and responsive pages from designs provided in{" "}
					<span className='highlight'>Figma</span>.
					My responsibilities also included providing client services support by
					addressing changes and bug fixes on existing sites. This
					honed my
					<span className='highlight'> problem-solving skills</span>,
					allowing me to resolve issues promptly whilst communicating
					effectively with project managers. Amid the programming
					excitement, I diligently manage tasks like time tracking and
					updating Jira tickets and I actively participated
					in project stand-ups.
				</p>
			</ContentSection>

			<ContentSection heading='Pre-dev' background='bg-primary' index={4}>
				<p>
					In April 2021, I undertook the self-paced _Nology Software
					Development bootcamp alongside my full-time job. Throughout,
					I delved into languages/frameworks like SASS, JavaScript
					(functional & OOP), React JS, and Node JS. Firebase powered
					back-end development, and unit testing was tackled with
					Jest, Cypress, Enzyme, and React Testing Library. Insights
					into TDD and Agile methodologies were gained.
				</p>

				<p>
					A highlight was my contribution to a client project, a React
					JS web app monitoring student's food waste and their
					environmental impact. Crafting a staged form and styling
					menu items, I used useForm and Yup Resolver for seamless
					user experiences. Other tools included Trello, Figma and
					GitHub.
				</p>

				<p>
					Previously I was a{" "}
					<span className='highlight'>Project Coordinator</span> for
					SE Controls, ensuring smooth coordination of the
					installation of smoke ventilation systems. I hold a
					Bachelor’s Degree in Interior Architecture and Design, which
					included creating 3D digital models with Autodesk CAD and
					3DS Max.
				</p>
			</ContentSection>

			<ContentSection heading='Future' index={5}>
				<p>
					I'm committed to improving my web development skills,
					engaging with content through podcasts and videos.
					Proficient in programming responsive, accessible, and
					functional websites, I bring a naturally organised approach
					and an eye for detail, to produce quality, DRY code.
				</p>
				<p>
					Now, I{" "}
					<span className='highlight'>
						eagerly seek my next challenge
					</span>
					, grateful for the experiences that have shaped me so far. Thriving
					in a dynamic atmosphere, my primary focus lies in front-end
					development, where I find fulfillment in witnessing the
					visual outcomes of my dedication. My coding journey has been
					immensely rewarding, and I look forward to the next chapter.
				</p>
			</ContentSection>
		</TemplatePage>
	);
};

export default Experience;
