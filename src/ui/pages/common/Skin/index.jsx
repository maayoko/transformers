import React from "react";
import Skin from "./Skin";
import { withSkins } from "state/skins";

export default withSkins(({ transformer, updateSkin, skins }) => {
	return <Skin transformer={transformer} updateSkin={updateSkin} skins={skins} />;
});
