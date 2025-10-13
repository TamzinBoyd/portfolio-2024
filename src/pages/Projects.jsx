
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
						During my time on the Nology Software Development course, I tackled a range of challenges and projects that sharpened my problem-solving abilities. I broke down complex tasks into manageable segments and approached each one with a methodical mindset, ensuring clarity and efficiency throughout
					</p>
					<p>
						While working with an e-commerce agency, I contributed to the development of dynamic components and pages for online stores. This included crafting responsive headers, mobile-friendly menus, interactive widgets, and other essential UI elements that enhanced user experience and functionality.

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
