
import { useEffect, useState, createRef } from "react";
import TemplatePage from "../components/TemplatePage";
import Blank from "../components/other/Blank";
import ContentSection from "../components/content/ContentSection";
import projectData from "../data/projectData.json";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
	const [cardRefs, setCardRefs] = useState([]);

	const createCardRefs = (count) => {
		const refs = Array.from({ length: count }, () => createRef());
		setCardRefs(refs);
	};

	useEffect(() => {
		createCardRefs(projectData.length);
	}, []);

	return (
		<TemplatePage>
			<Blank />
			<ContentSection background='bg-primary' heading='Projects'>
				<div className='w-full md:w-96 lg:w-[45%]'>
					<p>
						During my Nology Software Development Course I tackled
						a series of challenges. These projects refined my
						problem-solving skills, breaking tasks into manageable
						segments and approaching them methodically.
					</p>
					<p>
						In my current role I've coded components and pages
						for e-commerce sites, including headers, mobile
						menus, widgets and more. Seeking a new challenge I recently delved into
						Next.js, devealoping this portfolio with its App Router
						and server-side rendering capabilities.
					</p>
				</div>
			</ContentSection>

			<div className='flex flex-col items-center p-5 pb-28 md:px-0 md:pt-0 md:pb-16 w-full '>
				{cardRefs?.map((ref, index) => (
					<div
						key={index}
						className={`w-full md:w-72 lg:w-80
						${index % 2 === 0 ? "md:ml-80 lg:ml-96" : "md:mr-80 lg:mr-96"}
						${index > 0 ? "mt-16 md:-mt-64 lg:-mt-80" : "-mt-8 md:-mt-44 lg:-mt-56"}
						`}
					>
						<ProjectCard
							key={index}
							index={index}
							data={projectData[index]}
						/>
					</div>
				))}
			</div>
		</TemplatePage>
	);
};

export default Projects;
