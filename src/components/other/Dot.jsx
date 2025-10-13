const Dot = ({
	size = "small",
}) => {
	return (
		<div
			className={`dot rounded-full bg-accent animate-dampedBounce ${
				size === "small"
					? "w-4 h-4"
					: size === "medium"
					? "w-6 h-6"
					: "w-12 h-12"
			}`}
		></div>
	);
};

export default Dot;
