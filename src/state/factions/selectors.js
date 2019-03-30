const getFactions = state => state.factions;
const getFactionsOptions = state => [
	{ value: "", label: "Select faction..." },
	...state.factions.map(faction => ({ value: faction._id, label: faction.name }))
];

export { getFactions, getFactionsOptions };
