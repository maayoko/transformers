import {} from "./actionTypes";

const currentTransformer = (state = null, action) => {
	switch (action.type) {
		case UPDATE_CURRENT_TRANSFORMER_NAME:
			return {
				...state,
				name: action.payload,
				link: helpers.replaceWithDash(action.payload)
			};

		default:
			return state;
	}
};

export { currentTransformer };
