import React from "react";
import Typography from "../../components/Typography/Typography";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import FormGroup from "../../components/FormGroup/FormGroup";

const basePath = "/assets/transformers-robots";
const skins = [
    { src: `${basePath}/bumblebee-car.png`, name: "Bumblebee car" },
    { src: `${basePath}/jazz-car.png`, name: "Jazz car" },
    { src: `${basePath}/megatron-car.png`, name: "Megatron car" },
    { src: `${basePath}/palpatine-car.png`, name: "Palpatine car" },
    { src: `${basePath}/shockwave-car.png`, name: "Shockwave car" },
    { src: `${basePath}/transformer-car-not-selected-gold.png`, name: "Shockwave" },
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
                            options={["Select group...", "Air", "Sea", "Land"]} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="vehicle_type">Vehicle Type</Label>
                        <Select 
                            width="small"
                            placeholder
                            onChange={() => console.log("changed")}
                            id="status" 
                            options={["Select type...", "Boat", "Helicopter", "Plane"]} />
                    </FormGroup>
                </div>
                <div style={{ display: "flex", flexBasis: "51rem", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        skins.map((skin, idx) => {
                            return <span key={idx}
                                        style={{ 
                                            marginTop: "3.6rem",
                                            backgroundImage: `url(${skin.src})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            display: "block",
                                            width: "15.5rem", 
                                            height: "15.5rem"}} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Vehicle;