import { useState } from "react";

export const activeState = initialActiveIdx => {
	const [activeLinkIdx, setActiveLinkIdx] = useState(initialActiveIdx);

	return {
		activeLinkIdx,
		setActiveLinkIdx
	};
};
