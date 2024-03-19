import { DataProps } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectCardBtn = ({
	data,
	index = 0,
}) => {
	return (
		<>
			<button
				className='btn w-full lg:w-72 bg-secondary text-primary hover:bg-accent border-none'
				onClick={() => {
					let modalEl: any;
					modalEl = document.getElementById(`modal_${index}`);
					if (modalEl) {
						modalEl.showModal();
					}
				}}
			>
				View
			</button>
			<ProjectModal index={index} data={data} />
		</>
	);
};

export default ProjectCardBtn;
