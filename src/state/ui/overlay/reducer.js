import { OVERLAY_CLOSE, OVERLAY_OPEN } from "./actionTypes";

const overlay = (state = { opened: false }, action) => {
	switch (action.type) {
		case OVERLAY_CLOSE:
			return { ...state, opened: false };

		case OVERLAY_OPEN:
			return { ...state, opened: true };

		default:
			return state;
	}
};

export { overlay };
