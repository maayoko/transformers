import * as transformersApi from "../../api/transformers";
import * as transformersApiSelectors from "../../api/transformers/selectors";
import {
	DOWNLOAD_TRANSFORMERS_DATA_FAILURE,
	DOWNLOAD_TRANSFORMERS_DATA_PENDING,
	DOWNLOAD_TRANSFORMERS_DATA_SUCCESS
} from "./actionTypes";
import { addTransformers } from "../transformers";
import { addFactions } from "../factions";
import { addStatuses } from "../statuses";
import { addVehicles } from "../vehicles";
import { addGears } from "../gears";

const getTransformersData = () => async (dispatch, getState) => {
	dispatch({
		type: DOWNLOAD_TRANSFORMERS_DATA_PENDING,
		payload: "Downloading transformers data"
	});

	try {
		const state = getState();
		const response = await transformersApi.getAll();
		let {
			transformers,
			factions,
			statuses,
			vehicles,
			gears
		} = transformersApiSelectors.getTransformersData(await response.json(), state);

		dispatch({
			type: DOWNLOAD_TRANSFORMERS_DATA_SUCCESS,
			payload: "Transformers data downloaded"
		});
		dispatch(addTransformers(transformers));
		dispatch(addFactions(factions));
		dispatch(addStatuses(statuses));
		dispatch(addVehicles(vehicles));
		dispatch(addGears(gears));
	} catch (e) {
		dispatch({
			type: DOWNLOAD_TRANSFORMERS_DATA_FAILURE,
			payload: "Couldn't download transformers data"
		});
	}
};

export { getTransformersData };
