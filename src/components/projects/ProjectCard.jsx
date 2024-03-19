import { useInView } from "react-intersection-observer";
import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardImg from "./ProjectCardImg";
import ProjectCardBtn from "./ProjectCardBtn";
import usePageSizeCheck from "../../hooks/usePageSizeCheck";

const ProjectCard = ({ index, data }) => {
	const { ref, inView } = useInView();
	const direction =
		index % 2 === 0 ? "translate-x-full" : "-translate-x-full";

	const breakpoint = 801;
	let { width } = usePageSizeCheck();
	let shouldShow = "";

	if (width && width > breakpoint) {
		shouldShow = inView
			? "translate-x-0 opacity-100"
			: `${direction} opacity-0`;
	}

	return (
		<div
			ref={ref}
			className={`product-card flex flex-col items-center relative transition-all duration-1000
            ${shouldShow}`}
		>
			<ProjectCardTitle title={data.name} />
			<ProjectCardImg src={data.image} altText={data.altText} />
			<ProjectCardBtn data={data} index={index} />
		</div>
	);
};

export default ProjectCard;
