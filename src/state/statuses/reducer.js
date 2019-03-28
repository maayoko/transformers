import Status from "../../domain/entities/Status";
import { ADD_STATUS, ADD_STATUSES } from "./actionTypes";

const statuses = (state = [], action) => {
	switch (action.type) {
		case ADD_STATUS:
			return [...state, new Status(action.payload)];

		case ADD_STATUSES:
			return [...state, ...action.payload.map(status => new Status(status))];

		default:
			return state;
	}
};

export { statuses };
