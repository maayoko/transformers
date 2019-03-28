import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { factionsReducer } from "./factions";
import { statusesReducer } from "./statuses";
import { transformerReducer } from "./transformer";
import { transformersReducer } from "./transformers";
import { vehiclesReducer } from "./vehicles";

export default combineReducers({
	factions: factionsReducer,
	statuses: statusesReducer,
	transformer: transformerReducer,
	transformers: transformersReducer,
	vehicles: vehiclesReducer,
	routing: routerReducer
});
