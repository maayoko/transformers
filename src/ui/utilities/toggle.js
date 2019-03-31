import { useState } from "react";

const toggle = initialState => {
	const [isOn, toggleState] = useState(initialState);

	return {
		isOn,
		toggle: toggleState
	};
};

export { toggle };
