import Transformer from "../../domain/entities/Transformer";
import Vehicle from "../../domain/entities/Vehicle";
import Faction from "../../domain/entities/Faction";
import Status from "../../domain/entities/Status";
import Image from "../../domain/entities/Image";
import Gear from "../../domain/entities/Gear";

const autobots = ["Optimus Prime", "Bumblebee"];
const decepticons = ["Megatron"];

const getTransformersData = (transformersData, state) => {
	const paths = state.global.paths;
	const images = state.global.images;

	const transformers = [];
	const factions = [];
	const statuses = [];
	const vehicles = [];
	const gears = [];

	const getPath = (pathType, imagesType, compare) =>
		`${paths[pathType]}/${images[imagesType].list.find(compare).image}`;

	transformersData.factions.forEach(faction => {
		console.log(faction);
		const standardSrc = getPath(
			"factions",
			"factions",
			image => image.name === faction.name.toLowerCase() && image.version === "gold"
		);
		const goldSrc = standardSrc;
		const darkSrc = getPath(
			"factions",
			"factions",
			image => image.name === faction.name.toLowerCase() && image.version === "black"
		);

		factions.push(new Faction(faction.name, new Image(standardSrc, goldSrc, darkSrc)));
	});

	transformersData.vehicleTypes.forEach(vehicle => {
		vehicles.push(
			new Vehicle(
				vehicle.group,
				vehicle.type,
				vehicle.model,
				new Image(
					`${paths.vehicles}/${
						images.vehicles.list.find(image => image.model === vehicle.model).image
					}`
				)
			)
		);
	});

	transformersData.transformers.forEach(transformer => {
		const gearList = transformer.gear.map(_gear => {
			let gear = gears.find(g => g.name === _gear);
			if (!gear) {
				const standardSrc = `${paths.gears}/${
					images.gears.list.find(__gear => __gear.type === _gear).image
				}`;
				gear = new Gear(_gear, standardSrc);
				gears.push(gear);
			}

			return gear;
		});

		let status = statuses.find(_status => _status.value === transformer.status);
		if (!status) {
			const standardSrc = `${paths.common}/${
				images.common.list.find(
					_status =>
						_status.type === "health_level" &&
						_status.level === transformer.status.toLowerCase() &&
						_status.version === "gold"
				).image
			}`;
			const goldSrc = standardSrc;
			const darkSrc = `${paths.common}/${
				images.common.list.find(
					_status =>
						_status.type === "health_level" &&
						_status.level === transformer.status.toLowerCase() &&
						_status.version === "black"
				).image
			}`;
			status = new Status(transformer.status, new Image(standardSrc, goldSrc, darkSrc));
			statuses.push(status);
		}

		const skinsStandardImage = `${paths.skins}/${images.skins.list.find(
			skin => skin.split(".")[0] === transformer.name.toLowerCase().replace(" ", "-")
		)}`;

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
				new Image(skinsStandardImage)
			)
		);
	});

	return {
		transformers,
		factions,
		statuses,
		vehicles,
		gears
	};
};

export { getTransformersData };
