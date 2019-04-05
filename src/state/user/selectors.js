const getUser = state => state.user;
const getUserName = state => getUser(state).name;
const getUserLink = state => getUser(state).link;

export { getUser, getUserName, getUserLink };
