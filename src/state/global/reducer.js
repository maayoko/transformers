import paths from "./config/paths.json";
import images from "./config/images.json";
import credentials from "./config/credentials.json";

const initialState = {
	paths,
	images,
	credentials
};

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export { globalReducer };
