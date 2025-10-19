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

	return (
		<div className="relative overflow-x-hidden">
			{width > breakpoint ? <Header /> : <MobileMenu />}
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default TemplatePage;
