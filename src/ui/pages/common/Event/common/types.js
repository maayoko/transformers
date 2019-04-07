import PropTypes from "prop-types";

const types = {
	event: PropTypes.shape({
		title: PropTypes.string,
		startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
		startTime: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
		endTime: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
	}).isRequired,
	onTitleChange: PropTypes.func,
	onDateChange: PropTypes.func,
	onStartTimeChange: PropTypes.func,
	onEndTimeChange: PropTypes.func,
	onSubmit: PropTypes.func
};

export default types;
