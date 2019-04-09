import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getAuth } from "./selectors";

const withAuth = connect(
	state => ({
		auth: getAuth(state)
	}),
	dispatch => ({
		googleLogin: () => dispatch(action.googleLogin()),
		googleLogout: () => dispatch(action.googleLogout()),
		logout: () => dispatch(action.logout())
	})
);

export { withAuth };
