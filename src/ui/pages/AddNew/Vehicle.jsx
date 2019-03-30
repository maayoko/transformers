/**
 * External deps
 */
import React, { useState } from "react";

/**
 * Internal deps
 */
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import FormGroup from "../../components/FormGroup/FormGroup";
import Image from "../../components/Image/Image";
import Group from "../../components/Group/Group";
import ListedImage from "../../components/ListedImage/ListedImage";
import { withVehicles } from "state/vehicles";

/**
 * Variables
 */
const basePath = "/assets/transformers-robots";
const vehicles = [
	{ src: `${basePath}/bumblebee-car.png`, name: "Bumblebee car" },
	{ src: `${basePath}/jazz-car.png`, name: "Jazz car" },
	{ src: `${basePath}/megatron-car.png`, name: "Megatron car" },
	{ src: `${basePath}/palpatine-car.png`, name: "Palpatine car" },
	{ src: `${basePath}/shockwave-car.png`, name: "Shockwave car" },
	{ src: `${basePath}/transformer-car-not-selected-gold.png`, name: "Shockwave" }
];

const Vehicle = ({ vehicles, transformer, updateVehicle, vehicleTypes, vehicleGroups }) => {
	const [vehicleType, updateVehicleType] = useState(null);
	const [vehicleGroup, updateVehicleGroup] = useState(null);
	const isVehicleTypeDisabled = vehicleGroup == null || vehicleGroup === "";
	const isSelectionDisabled = isVehicleTypeDisabled || vehicleType == null || vehicleType === "";

	const onChange = handler => e => {
		handler(e.target.value);
	};

	const onVehicleClick = handler => () => {
		if (isSelectionDisabled) {
			return alert("Please select vehicle group and type first.");
		}

		handler();
	};

	return (
		<div style={{ maxWidth: "51rem" }}>
			<Group align="between">
				<FormGroup>
					<Label htmlFor="vehicle_group">Vehicle Group</Label>
					<Select
						width="small"
						placeholder
						onChange={onChange(updateVehicleGroup)}
						id="status"
						options={vehicleGroups}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="vehicle_type">Vehicle Type</Label>
					<Select
						disabled={isVehicleTypeDisabled}
						width="small"
						placeholder
						onChange={onChange(updateVehicleType)}
						id="status"
						options={vehicleTypes}
					/>
				</FormGroup>
			</Group>
			<Group wrap align="between">
				{vehicles.map(vehicle => {
					return (
						<ListedImage
							disabled={isSelectionDisabled}
							onClick={onVehicleClick(() => updateVehicle(vehicle))}
							selected={vehicle._id === transformer.vehicle._id}
							style={{ marginTop: "3.6rem" }}
							key={vehicle._id}>
							<Image
								type="preview-6"
								src={vehicle.image.standard}
								title={vehicle.name}
							/>
						</ListedImage>
					);
				})}
			</Group>
		</div>
	);
};

export default withVehicles(Vehicle);
