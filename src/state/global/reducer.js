import paths from "./paths.json";
import images from "./images.json";

const initialState = {
	paths,
	images
};

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export { globalReducer };
