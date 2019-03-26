import React from "react";
import Typography from "../../components/Typography/Typography";

const basePath = "/assets/weapons";
const gears = [
    { src: `${basePath}/canon.png`, name: "Canon" },
    { src: `${basePath}/concept2.png`, name: "Concept" },
    { src: `${basePath}/machine-gun.png`, name: "Machine gun" },
    { src: `${basePath}/rifle.png`, name: "Rifle" },
    { src: `${basePath}/shield.png`, name: "Shield" },
    { src: `${basePath}/weapon-not-selected-gold.png`, name: "Shockwave" },
];

class Gear extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: "51rem" }}>
                <Typography size="body-big" color="white">Choose your favorite gear</Typography>
                <div style={{ display: "flex", flexBasis: "51rem", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        gears.map((skin, idx) => {
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

export default Gear;