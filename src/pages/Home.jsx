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
        <div className='home-content flex flex-col pl-5'>
          <div className='home-title flex items-baseline gap-3 pb-5'>
            <Heading
              tag='h1'
              styles='h-8 text-[150px] md:text-[300px] font-bold text-secondary'
            >
              Hi
            </Heading>
            <Dot
              size={width > breakpoint ? 'large' : 'medium'}
              bgColour='accent'
            />
          </div>
          <div className='pl-4 pt-8 md:pl-5'>
			      <h6 className="text-secondary font-bold mb-2 text-lg">
               I'm Tamzin, welcome to my portfolio.
            </h6>
            <p className="text-secondary font-extralight text-lg pr-4">
              I'm a Web Developer based in the Midlands, UK.
            </p>
          </div>
        </div>
      </div>
    </TemplatePage>
  );
}
