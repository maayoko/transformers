import React from "react";
import Gear from "./Gear";
import { withGears } from "state/gears";

export default withGears(({ transformer, gears, addGear, removeGear }) => {
	const onGearClick = (gear, isSelected) => () => {
		if (isSelected) {
			removeGear(gear);
		} else {
			addGear(gear);
		}
	};

	return <Gear transformer={transformer} gears={gears} onGearClick={onGearClick} />;
});
