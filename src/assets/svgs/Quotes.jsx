interface Props {
	classes?: string;
}
const Quotes: React.FunctionComponent<Props> = ({ classes }) => {
	return (
		<div className={`${classes} w-fit relative`}>
			<svg
				className='fill-secondary w-10 md:w-16 h-10 md:h-16'
				viewBox='0 0 32 32'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z'></path>
			</svg>
		</div>
	);
};

export default Quotes;
