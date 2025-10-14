import { useInView } from "react-intersection-observer";
import usePageSizeCheck from "../../hooks/usePageSizeCheck";
import Dot from "../other/Dot";

const ContentSection = ({
	background = "bg-white",
	heading,
	children,
	marginBottom = '-mb-[72px]',
	paddingBottom = 'pb-28',
	index
}) => {
	const { ref, inView } = useInView();
	const direction =
		index % 2 === 0 ? "translate-x-full" : "-translate-x-full";
	const breakpoint = 801;
	let { width } = usePageSizeCheck();
	let shouldShow = "";

	// if (width === undefined) {
	// 	width = 802;
	// }


	if (width && width > breakpoint) {
	shouldShow = inView
		? "translate-x-0 opacity-100"
		: `${direction} opacity-0`;
	}
	return (
		<section className={`content-section relative ${marginBottom}`} ref={ref}>
			<div className={`md:container md:mx-auto relative flex items-baseline top-2 md:top-[13px] transition-all duration-1000
            ${shouldShow}`}>
				<h3 className='text-secondary font-bold text-4xl md:text-7xl uppercase mr-2 ml-4'>
					{heading}
				</h3>
				<Dot size={width > breakpoint ? "medium" : "small"} />
			</div>
			<div className={`${background} pt-12 md:pt-20 ${paddingBottom} px-4 md:px-0`}>
				<div className='lg:container lg:mx-auto md:px-4 2xl:px-52'>
					{children}
				</div>
			</div>
		</section>
	);
};

export default ContentSection;
