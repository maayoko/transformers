import { combineReducers } from "redux";
import { overlayReducer } from "./overlay";

export default combineReducers({
	overlay: overlayReducer
});
