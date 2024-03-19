import { useEffect, useState } from "react";

const usePageSizeCheck = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window?.innerWidth,
			});
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};

export default usePageSizeCheck;
