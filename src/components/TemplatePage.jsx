import usePageSizeCheck from "../hooks/usePageSizeCheck";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import Footer from "../components/footer/Footer";

const TemplatePage = ({ children }) => {
	const breakpoint = 801;
	let { width } = usePageSizeCheck();

	if (width === undefined) {
		width = 802;
	}
	console.log(width, 'width');
	return (
		<div className="relative">
			{width > breakpoint ? <Header /> : <MobileMenu />}
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default TemplatePage;
