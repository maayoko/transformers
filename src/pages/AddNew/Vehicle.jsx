import React from "react";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import FormGroup from "../../components/FormGroup/FormGroup";
import Image from "../../components/Image/Image";

const basePath = "/assets/transformers-robots";
const vehicles = [
	{ src: `${basePath}/bumblebee-car.png`, name: "Bumblebee car" },
	{ src: `${basePath}/jazz-car.png`, name: "Jazz car" },
	{ src: `${basePath}/megatron-car.png`, name: "Megatron car" },
	{ src: `${basePath}/palpatine-car.png`, name: "Palpatine car" },
	{ src: `${basePath}/shockwave-car.png`, name: "Shockwave car" },
	{ src: `${basePath}/transformer-car-not-selected-gold.png`, name: "Shockwave" }
];

class Vehicle extends React.Component {
	render() {
		return (
			<div style={{ width: "51rem" }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<FormGroup>
						<Label htmlFor="vehicle_group">Vehicle Group</Label>
						<Select
							width="small"
							placeholder
							onChange={() => console.log("changed")}
							id="status"
							options={["Select group...", "Air", "Sea", "Land"]}
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="vehicle_type">Vehicle Type</Label>
						<Select
							width="small"
							placeholder
							onChange={() => console.log("changed")}
							id="status"
							options={["Select type...", "Boat", "Helicopter", "Plane"]}
						/>
					</FormGroup>
				</div>
				<div
					style={{
						display: "flex",
						flexBasis: "51rem",
						flexWrap: "wrap",
						justifyContent: "space-between"
					}}>
					{vehicles.map((vehicle, idx) => {
						return (
							<Image
								key={idx}
								type="preview-6"
								src={vehicle.src}
								title={vehicle.name}
								style={{ marginTop: "3.6rem" }}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Vehicle;
