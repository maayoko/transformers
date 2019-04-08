import { user as userConfig } from "./config.json";
import { createAction, createTypes } from "./utils";

const record = userConfig.key;

const insertUser = createAction(createTypes.INSERT, record);
const retrieveUser = createAction(createTypes.RETRIEVE, record);
const clearUser = createAction(createTypes.CLEAR, record);

const setup = (initialValue = null) => {
	retrieveUser() == null && insertUser(initialValue);
};

export { setup, insertUser, retrieveUser, clearUser };
