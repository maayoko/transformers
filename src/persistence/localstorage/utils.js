import { localStorage } from ".";

const createTypes = {
	INSERT: "INSERT",
	RETRIEVE: "RETRIEVE",
	CLEAR: "CLEAR"
};

const prepareForInsertion = data => {
	return JSON.stringify(data);
};

const prepareForUsage = data => {
	return JSON.parse(data);
};

const createInsert = record => data => {
	localStorage.setItem(record, prepareForInsertion(data));
};

const createRetrieve = record => () => {
	return prepareForUsage(localStorage.getItem(record));
};

const createClear = record => () => {
	localStorage.removeItem(record);
};

const createAction = (type, record) => {
	switch (type) {
		case createTypes.INSERT:
			return createInsert(record);
		case createTypes.RETRIEVE:
			return createRetrieve(record);
		case createTypes.CLEAR:
			return createClear(record);
		default:
			throw new Error(`Provided type: '${type}' is not supported`);
	}
};

export { createTypes, createAction };
