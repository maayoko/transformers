import { withTransformers } from "state/transformers";
import { withFactions } from "state/factions";
import Search from "./Search";

export default withTransformers(withFactions(Search));
