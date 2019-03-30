const getVehicles = state => state.vehicles;
const getVehicleTypes = state => [
	{ value: "", label: "Select vehicle type" },
	...state.vehicles.reduce((acc, vehicle) => {
		if (!acc.find(v => v.value === vehicle.type)) {
			acc.push({ value: vehicle.type, label: vehicle.type });
		}
		return acc;
	}, [])
];
const getVehicleGroup = state => [
	{ value: "", label: "Select vehicle group" },
	...state.vehicles.reduce((acc, vehicle) => {
		if (!acc.find(v => v.value === vehicle.group)) {
			acc.push({ value: vehicle.group, label: vehicle.group });
		}
		return acc;
	}, [])
];

export { getVehicles, getVehicleTypes, getVehicleGroup };
