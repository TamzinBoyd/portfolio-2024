interface Props {
	colour?: string;
}
const Close: React.FunctionComponent<Props> = ({
	colour = "stroke-primary",
}) => {
	return (
		<svg
			width='40px'
			height='40px'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='12'
				cy='12'
				r='10'
				className={`stroke-primary group-hover:stroke-accent`}
				strokeWidth='1.5'
			/>
			<path
				d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
				className={`stroke-primary  group-hover:stroke-accent`}
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default Close;
