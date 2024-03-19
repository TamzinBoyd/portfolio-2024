import usePageSizeCheck from "../../hooks/usePageSizeCheck";
import Brush from "../../assets/svgs/Brush";
import Design from "../../assets/svgs/Design";
import Game from "../../assets/svgs/Game";
import Hiking from "../../assets/svgs/Hiking";
import Horse from "../../assets/svgs/Horse";
import Music from "../../assets/svgs/Music";


const AboutBanner = () => {
	const breakpoint = 801;
	let { width } = usePageSizeCheck();

	if (width === undefined) {
		width = 802;
	}

	return (
		<div className='about-banner bg-secondary relative overflow-visible left-1/2 w-screen transform -translate-x-1/2 flex flex-col items-center justify-center py-5 lg:mt-16'>
			<div className='flex items-center justify-center gap-2 md:gap-4'>
				<Design />
				<Horse />
				<Game />
				<Brush />
				<Hiking />
				<Music />
			</div>
		</div>
	);
};

export default AboutBanner;
