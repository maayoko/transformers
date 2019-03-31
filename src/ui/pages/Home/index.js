import { withTransformers } from "state/transformers";
import { withCurrentTransformer } from "state/currentTransformer";
import Home from "./Home";

export default withTransformers(withCurrentTransformer(Home));
