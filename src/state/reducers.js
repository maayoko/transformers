/**
 * External deps
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

/**
 * Internal deps
 */
import { factionsReducer } from "./factions";
import { statusesReducer } from "./statuses";
import { transformerReducer } from "./transformer";
import { currentTransformerReducer } from "./currentTransformer";
import { transformersReducer } from "./transformers";
import { vehiclesReducer } from "./vehicles";
import { notificationsReducer } from "./notifications";
import { eventsReducer } from "./events";
import { currentEventReducer } from "./event/current";
import { newEventReducer } from "./event/new";
import { userReducer } from "./user";
import { authReducer } from "./auth";
import { uiReducer } from "./ui";
import { gearsReducer } from "./gears";
import { skinsReducer } from "./skins";
import { globalReducer } from "./global";

export default combineReducers({
	factions: factionsReducer,
	statuses: statusesReducer,
	transformer: transformerReducer,
	currentTransformer: currentTransformerReducer,
	transformers: transformersReducer,
	vehicles: vehiclesReducer,
	gears: gearsReducer,
	notifications: notificationsReducer,
	events: eventsReducer,
	currentEvent: currentEventReducer,
	newEvent: newEventReducer,
	skins: skinsReducer,
	auth: authReducer,
	user: userReducer,
	routing: routerReducer,
	global: globalReducer,
	ui: uiReducer
});
