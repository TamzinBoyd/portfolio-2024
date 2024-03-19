

const Heading = ({ tag = "h3", children, styles }) => {
	const HeadingTag = tag;
	return (
		<HeadingTag className={`${styles} font-sans`}>{children}</HeadingTag>
	);
};

export default Heading;
