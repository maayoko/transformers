import { connect } from "react-redux";
import { getStatuses } from "./selectors";

const withStatuses = connect(state => ({
	statuses: getStatuses(state)
}));

export { withStatuses };
