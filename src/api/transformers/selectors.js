import Transformer from "../../domain/entities/Transformer";
import Vehicle from "../../domain/entities/Vehicle";
import Faction from "../../domain/entities/Faction";
import Status from "../../domain/entities/Status";
import Image from "../../domain/entities/Image";
import Gear from "../../domain/entities/Gear";
import helpers from "core/common/helpers";

const autobots = ["Optimus Prime", "Bumblebee"];
const decepticons = ["Megatron"];

const getTransformersData = (transformersData, state) => {
	const paths = state.global.paths;
	const images = state.global.images;

	const transformers = [];
	const factions = [];
	const statuses = [];
	const vehicles = [];
	const gears = state.gears;
	const skins = state.skins;

	// Helper method for get image path
	const getImagePath = (pathType, compare) =>
		`${paths[pathType]}/${images[pathType].list.find(compare).image}`;

	// Get factions from api response
	transformersData.factions.forEach(faction => {
		const cb = version => image =>
			image.name === faction.name.toLowerCase() && image.version === version;

		const standardSrc = getImagePath("factions", cb("gold"));
		const goldSrc = standardSrc;

		const darkSrc = getImagePath("factions", cb("black"));
		factions.push(new Faction(faction.name, new Image(standardSrc, goldSrc, darkSrc)));
	});

	// Get vehicles from api response
	transformersData.vehicleTypes.forEach(vehicle => {
		vehicles.push(
			new Vehicle(
				vehicle.group,
				vehicle.type,
				vehicle.model,
				new Image(getImagePath("vehicles", image => image.model === vehicle.model))
			)
		);
	});

	// Get transformers from api response
	transformersData.transformers.forEach(transformer => {
		const gearList = transformer.gear.map(_gear => {
			let gear = gears.find(g => g.name === _gear);
			if (!gear) {
				// Get gears from api reponse
				const standardSrc = getImagePath("gears", __gear => __gear.type === _gear);
				gear = new Gear(_gear, new Image(standardSrc));
				gears.push(gear);
			}

			return gear;
		});

		let status = statuses.find(_status => _status.value === transformer.status);
		if (!status) {
			// Get statuses from api reponse
			const cb = version => _status =>
				_status.type === "health_level" &&
				_status.level === transformer.status.toLowerCase() &&
				_status.version === version;

			const standardSrc = getImagePath("common", cb("gold"));
			const goldSrc = standardSrc;

			const darkSrc = getImagePath("common", cb("black"));
			status = new Status(transformer.status, new Image(standardSrc, goldSrc, darkSrc));
			statuses.push(status);
		}

		transformers.push(
			new Transformer(
				transformer.name,
				vehicles.find(vehicle => vehicle.model === transformer.vehicleModel),
				factions.find(faction => {
					if (faction.name === "Autobots") {
						return autobots.find(name => name === transformer.name);
					} else {
						return decepticons.find(name => name === transformer.name);
					}
				}),
				gearList,
				status,
				skins.find(
					skin =>
						skin.name.split(".")[0] === transformer.name.toLowerCase().replace(" ", "-")
				),
				helpers.replaceWithDash(transformer.name),
				transformer.id
			)
		);
	});

	return {
		transformers,
		factions,
		statuses,
		vehicles
	};
};

export { getTransformersData };
