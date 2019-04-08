import { auth as authConfig } from "./config.json";
import { createAction, createTypes } from "./utils";

const record = authConfig.key;

const insertCredentials = createAction(createTypes.INSERT, record);
const retrieveCredentials = createAction(createTypes.RETRIEVE, record);
const clearCredentials = createAction(createTypes.CLEAR, record);

const setup = (initialValue = null) => {
	insertCredentials(initialValue);
};

export { setup, insertCredentials, retrieveCredentials, clearCredentials };
