import React from "react";

const load = () => {};

const unload = () => {};

const context = React.createContext({
	loader: {
		load,
		unload
	}
});

export default context;
