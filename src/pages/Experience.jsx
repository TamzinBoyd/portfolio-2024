
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
			<ContentSection heading='Experience'>
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
							<h6 className='flex flex-col justify-center  text-2xl font-bold text-center max-w-[210px] md:max-w-none'>
								Front-end{" "}
								<span className='text-accent'>
									Web Developer{" "}
								</span>
								with 1.5 years{" "}
								<span className='text-accent'>
									industry experience
								</span>
							</h6>
							<Quotes classes='rotate-180 lg:bottom-[20%]' />
						</div>
						<p className='col-start-3 col-end-6'>
							My web development professional journey started with
							5874, an innovative{" "}
							<span className='highlight'>e-commerce</span>{" "}
							agency, where my front-end coding skills contribute
							to crafting captivating digital storefronts.
							Originating from a coding bootcamp, my dedication
							over a year of self-paced learning solidified my
							expertise in JavaScript and React. A{" "}
							<span className='highlight'>versatile coder</span>,
							I navigate seamlessly through technologies like
							React, Handlebars and Javascript, while mastering
							the art of styling with Sass and Tailwind. I bring
							an innovative approach to front-end development,
							coding digital experiences that seamlessly blend
							creativity and functionality.
						</p>
					</div>
				</div>
			</ContentSection>

			<ContentSection heading='Current' background='bg-primary'>
				<p>
					Since August 2022 I've been immersed in the world of web
					development at 5874. Beginning as a junior developer I
					showcased my skills and my dedication earnt me a promotion
					within six months. In this fast-paced agency, I actively
					contribute to the creation of a diverse range of e-commerce
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
					Recently I've been contributing to Loacker's site,
					using Cornerstone Stencil base code and Handlebars for
					content and custom widgets. Widgets are integrated into the
					store via Postman, allowing users to drag and drop in the
					Page Builder environment. Designs provided in{" "}
					<span className='highlight'>Figma</span> are
					coded into accessible, pixel-perfect components and pages.
				</p>

				<p>
					My responsibilities include client services support by
					addressing changes and bug fixes on existing sites. This
					hones my
					<span className='highlight'> problem-solving skills</span>,
					allowing me to resolve issues promptly whilst communicating
					effectively with project managers. Amid the programming
					excitement, I diligently manage tasks like time tracking and
					updating Jira tickets. Accustomed to adapting my working
					style to project lead requirements, I actively participate
					in project stand-ups.
				</p>
			</ContentSection>

			<ContentSection heading='Past'>
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

			<ContentSection heading='Future' background='bg-primary'>
				<p>
					I'm committed to improving my web development skills,
					engaging with content through podcasts and videos.
					Proficient in programming responsive, accessible, and
					functional websites, I bring a naturally organised approach
					and an eye for detail, to produce quality, DRY code. I like
					to learn new languages, I've dabbled with Next JS to create
					this portfolio.
				</p>
				<p>
					Now, I{" "}
					<span className='highlight'>
						eagerly seek my next challenge
					</span>
					, grateful for the experiences that have shaped me. Thriving
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
