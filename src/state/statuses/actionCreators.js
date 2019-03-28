import { ADD_STATUS, ADD_STATUSES } from "./actionTypes";

const addStatus = status => {
	return { type: ADD_STATUS, payload: status };
};

const addStatuses = statuses => {
	return { type: ADD_STATUSES, payload: statuses };
};

export { addStatus, addStatuses };
