import { createBasicAction } from "../../utils/actions";
import { OVERLAY_CLOSE, OVERLAY_OPEN } from "./actionTypes";

const openOverlay = createBasicAction(OVERLAY_OPEN);
const closeOverlay = createBasicAction(OVERLAY_CLOSE);

export { openOverlay, closeOverlay };
