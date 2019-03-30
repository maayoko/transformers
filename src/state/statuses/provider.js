import { connect } from "react-redux";
import { getStatuses, getStatusOptions } from "./selectors";

const withStatuses = connect(state => ({
	statuses: getStatuses(state),
	statusOptions: getStatusOptions(state)
}));

export { withStatuses };
