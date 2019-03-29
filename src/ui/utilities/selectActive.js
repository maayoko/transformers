import { useState } from "react";

const selectActive = initialActiveIdx => {
	const [activeLinkIdx, setActiveLinkIdx] = useState(initialActiveIdx);

	return {
		activeLinkIdx,
		setActiveLinkIdx
	};
};

export { selectActive };
