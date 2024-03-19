
const ProjectCardImg = ({
	src = "",
	altText = "",
}) => {
	return (
		<div>
			<img src={src} alt={altText} />
		</div>
	);
};

export default ProjectCardImg;
