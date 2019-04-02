/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import Label from "../../../components/Label/Label";
import Select from "../../../components/Select/Select";
import FormGroup from "../../../components/FormGroup/FormGroup";
import Image from "../../../components/Image/Image";
import Group from "../../../components/Group/Group";
import ListedImage from "../../../components/ListedImage/ListedImage";

const Vehicle = ({
	vehicles,
	transformer,
	filterService,
	onVehicleGroupChange,
	onVehicleTypeChange,
	onVehicleClick,
	vehicleTypes,
	vehicleGroups,
	isVehicleTypeDisabled,
	isSelectionDisabled
}) => (
	<div style={{ width: "51rem" }}>
		<Group align="between">
			<FormGroup>
				<Label htmlFor="vehicle_group">Vehicle Group</Label>
				<Select
					width="small"
					placeholder
					onChange={onVehicleGroupChange}
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
					onChange={onVehicleTypeChange}
					id="status"
					options={vehicleTypes.filter(filterService.filterVehicleTypes)}
				/>
			</FormGroup>
		</Group>
		<Group wrap align="between">
			{vehicles.filter(filterService.filterVehicles).map(vehicle => {
				return (
					<ListedImage
						disabled={isSelectionDisabled}
						onClick={onVehicleClick(vehicle)}
						selected={vehicle._id === transformer.vehicle._id}
						style={{ marginTop: "3.6rem" }}
						key={vehicle._id}>
						<Image type="preview-6" src={vehicle.image.standard} title={vehicle.name} />
					</ListedImage>
				);
			})}
		</Group>
	</div>
);

export default Vehicle;
