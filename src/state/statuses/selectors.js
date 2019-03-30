const getStatuses = state => state.statuses;
const getStatusOptions = state => [
	{ value: "", label: "Select status..." },
	...state.statuses.map(status => ({ value: status._id, label: status.value }))
];

export { getStatuses, getStatusOptions };
