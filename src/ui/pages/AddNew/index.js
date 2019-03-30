import { withTransformer } from "state/transformer";
import { withTransformers } from "state/transformers";
import AddNew from "./AddNew";

export default withTransformers(withTransformer(AddNew));
