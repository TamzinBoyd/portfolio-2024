import Heading from "../components/typography/Heading";
import Dot from "../components/other/Dot";
import usePageSizeCheck from "../hooks/usePageSizeCheck";
import TemplatePage from "../components/TemplatePage";

export default function Home() {
	const breakpoint = 801;
	let { width } = usePageSizeCheck();

	if (width === undefined) {
		width = 802;
	}

	return (
		<TemplatePage>
			<div className='relative'>
				<div className='home-content flex flex-col px-4 md:pl-14 mt-[40%] md:mt-[10%]'>
					<div className='home-title flex items-baseline gap-3 pb-5'>
						<Heading
							tag='h1'
							styles='h-8 text-[150px] md:text-[300px] 2xl:text-[500px] font-bold text-secondary'
						>
							Hi
						</Heading>
						<Dot
							size={width > breakpoint ? "large" : "medium"}
							bgColour='accent'
						/>
					</div>
					<div className='pl-2 pt-8'>
						<h6 className='text-secondary font-bold text-2xl mb-2 md:text-3xl 2xl:text-7xl 2xl:ml-4'>
							Web Developer, Midlands
						</h6>
						<p className='text-secondary font-extralight text-lg md:text-xl 2xl:text-5xl 2xl:ml-4 2xl:mt-8'>
							I'm Tamzin, welcome to my portfolio. Come and take a
							look around.
						</p>
					</div>
				</div>
			</div>
		</TemplatePage>
	);
}
