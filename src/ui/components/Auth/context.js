import React from "react";

const enable = () => {};

const disable = () => {};

const context = React.createContext({
	auth: {
		enable,
		disable
	}
});

export default context;
