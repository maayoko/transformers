import React from "react";
import Button from "../components/Button/Button";
import styles from "./Home.module.scss";
import Typography from "../components/Typography/Typography";
import RobotPreview from "../components/RobotPreview/RobotPreview";
import { Link } from "react-router-dom";
import AutobotLogo from "../assets/images/svg/logo.svg";
import HealtLevel from "../assets/images/svg/health_level.svg";

const basePath = "/assets/transformers-robots";

const transformers = [
    { imageSrc: `${basePath}/ironhide2.png`, name: "Ironhide", faction: "Decepticon" },
    { imageSrc: `${basePath}/megatron.png`, name: "Megatron", faction: "Decepticon" },
    { imageSrc: `${basePath}/bumblebee.png`, name: "Bumblebee", faction: "Autobot" },
]


class Home extends React.Component {

    render() {
        return (
           <div className={styles.root}>
                <div className={styles.background_shape_image}>
                    <main className={styles.main}>
                        <span className={styles.background_image}>
                            <img style={{ position: "absolute", bottom: "-10rem", left: "20rem", height: "43rem" }} src="assets/transformers-robots/optimus-prime.png" alt="Optimus-prime" />
                            <Button style={{ position: "absolute", bottom: "-4rem", left: "62rem" }} variant="primary">
                                <Link to="/transformers/optimus-prime/details">Check me out</Link>
                            </Button>
                            <div style={{ position: "absolute", top: "18rem", left: "62rem", textAlign: "left" }}>
                                <div style={{ display: "flex", alignItems: "center", width: "10rem" }}>
                                    <img style={{ width: "6.5rem", marginRight: "1.7rem" }} src={AutobotLogo} alt="Autobot Logo" />
                                    <Typography uppercase size="header-big" color="black" opacity="high">Optimus Prime</Typography>
                                </div>
                                <div style={{ marginTop: "4rem", display: "flex" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "7rem" }}>
                                        <Typography uppercase size="body-mid" color="black" opacity="mid">Status</Typography>
                                        <img style={{ width: "5.2rem", marginTop: "1rem" }} src={HealtLevel} alt="Health level" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Typography uppercase size="body-mid" color="black" opacity="mid">Vehicle</Typography>
                                        <img style={{ width: "10rem", marginTop: "1rem" }} src="assets/transformers-robots/megatron-car.png" alt="Health level" />
                                    </div>
                                </div>
                                <div style={{ marginTop: "2.5rem" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Typography uppercase size="body-mid" color="black" opacity="mid">Gear</Typography>
                                        <div style={{ display: "flex" }}>
                                            <img style={{ height: "7rem", marginTop: "1rem", marginRight: "1.5rem" }} src="assets/weapons/canon.png" alt="Health level" />
                                            <img style={{ height: "7rem", marginTop: "1rem" }} src="assets/weapons/shield.png" alt="Health level" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span> 
                    </main>
                    <aside className={styles.sidebar}>
                        <Typography size="body-big" color="white">Transformers at your disposal</Typography>
                        <div className={styles.transformers_list}>
                            {
                                transformers.map((transformer, idx) => (
                                    <RobotPreview 
                                        key={idx}
                                        imageSrc={transformer.imageSrc}
                                        name={transformer.name}
                                        faction={transformer.faction} />
                                    ))
                            }
                        </div>
                    </aside>
                </div>
           </div>
        );
    }
}

export default Home;