import helpers from "core/common/helpers";

const createBasicAction = type => payload => ({ type, payload });

const createAsyncAction = (type, { pending, success, failure }) => data => async (
	dispatch,
	getState
) => {
	dispatch({ type: `${type}_PENDING`, payload: pending.payload() });
	try {
		helpers.isFunction(success.before) && success.before(data, dispatch, getState);
		dispatch({
			type: `${type}_SUCCESS`,
			payload: success.payload()
		});
	} catch (e) {
		helpers.isFunction(failure.before) && failure.before(e, data, dispatch, getState);
		dispatch({ type: `${type}_FAILURE`, payload: failure.payload() });
	}
};

export { createBasicAction, createAsyncAction };
