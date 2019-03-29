import { connect } from "react-redux";
import { getNotifications } from "./selectors";

const withNotifications = connect(state => ({
	notifications: getNotifications(state)
}));

export { withNotifications };
