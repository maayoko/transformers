import { useState, useEffect } from "react";

const useWindowResize = () => {
	const [windowWidth, updateWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const listener = e => {
			updateWindowWidth(e.target.innerWidth);
		};

		window.addEventListener("resize", listener);

		return () => {
			window.removeEventListener("resize", listener);
		};
	});

	return windowWidth;
};

const breakPoints = {
	PHONE: 600,
	TABPORT: 900,
	TABLAND: 1300,
	BIGDESKTOP: 1800
};

const useWindowBreakPoints = () => {
	const windowWidth = useWindowResize();

	return {
		isPhone: windowWidth <= breakPoints.PHONE,
		istabPort: windowWidth <= breakPoints.TABPORT,
		isTabLand: windowWidth <= breakPoints.TABLAND,
		isBigDesktop: windowWidth >= breakPoints.BIGDESKTOP
	};
};

export { useWindowResize, useWindowBreakPoints };
