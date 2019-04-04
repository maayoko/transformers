import { connect } from "react-redux";
import { getUser } from "./selectors";

const withUser = connect(state => ({
	user: getUser(state)
}));

export { withUser };
