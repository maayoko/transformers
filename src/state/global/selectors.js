const getGlobal = state => state.global;
const getCredentials = state => getGlobal(state).credentials;

export { getGlobal, getCredentials };
