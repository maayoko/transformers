import React, { useState } from "react";
import { withVehicles } from "state/vehicles";
import Vehicle from "./Vehicle";

export default withVehicles(
	({ vehicles, transformer, updateVehicle, vehicleTypes, vehicleGroups }) => {
		const [vehicleType, updateVehicleType] = useState(null);
		const [vehicleGroup, updateVehicleGroup] = useState(null);
		const isVehicleTypeDisabled = vehicleGroup == null || vehicleGroup === "";
		const isSelectionDisabled =
			isVehicleTypeDisabled || vehicleType == null || vehicleType === "";

		const onChange = handler => e => {
			handler(e.target.value);
		};

		const onVehicleClick = vehicle => () => {
			if (isSelectionDisabled) {
				return alert("Please select vehicle group and type first.");
			}

			updateVehicle(vehicle);
		};

		const filterVehicleTypes = type => {
			if (vehicleGroup) {
				return (
					vehicles.find(
						vehicle =>
							(vehicle.group === vehicleGroup && vehicle.type === type.value) ||
							type.value === ""
					) != null
				);
			}

			return true;
		};

		const filterVehicles = vehicle => {
			if (vehicleType) {
				return vehicle.type === vehicleType;
			}

			return true;
		};

		const filterService = { filterVehicles, filterVehicleTypes };

		return (
			<Vehicle
				isVehicleTypeDisabled={isVehicleTypeDisabled}
				isSelectionDisabled={isSelectionDisabled}
				onVehicleGroupChange={onChange(updateVehicleGroup)}
				onVehicleTypeChange={onChange(updateVehicleType)}
				onVehicleClick={onVehicleClick}
				filterService={filterService}
				vehicles={vehicles}
				transformer={transformer}
				vehicleTypes={vehicleTypes}
				vehicleGroups={vehicleGroups}
			/>
		);
	}
);
