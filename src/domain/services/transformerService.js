import Transformer from "../entities/Transformer";
import Vehicle from "../entities/Vehicle";
import Gear from "../entities/Gear";
import Faction from "../entities/Faction";
import Image from "../entities/Image";
import Status from "../entities/Status";

const createDefaultTransformer = state => {
	const paths = state.global.paths;
	const images = state.global.images;
	const statusImagePath = `${paths.common}/${images.common.list[0].image}`;
	const gearImagePath = `${paths.gears}/${images.gears.list_neutral[0]}`;
	const factionImagePath = `${paths.factions}/${images.factions.list_neutral[0]}`;
	const vehicleImagePath = `${paths.vehicles}/${images.vehicles.list_neutral[0]}`;

	return new Transformer(
		"Unknown",
		new Vehicle(
			"Unknown",
			"Unknown",
			"Unknown",
			new Image(vehicleImagePath, vehicleImagePath, vehicleImagePath)
		),
		new Faction("Unknown", new Image(factionImagePath, factionImagePath, factionImagePath)),
		[new Gear("Unknown", new Image(gearImagePath, gearImagePath, gearImagePath))],
		new Status("Unknown", new Image(statusImagePath, statusImagePath, statusImagePath)),
		new Image(`${paths.skins}/${images.skins.list_neutral[0]}`),
		"unknown"
	);
};

export { createDefaultTransformer };
