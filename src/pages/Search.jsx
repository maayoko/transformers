import React from "react";
import Input from "../components/Input/Input";
import RadioButton from "../components/RadioButton/RadioButton";
import RobotPreview from "../components/RobotPreview/RobotPreview";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";

const basePath = "/assets/transformers-robots";
const linkBasePath = "/transformers"

const transformers = [
    { imageSrc: `${basePath}/ironhide2.png`, name: "Ironhide", faction: "Decepticon" },
    { imageSrc: `${basePath}/megatron.png`, name: "Megatron", faction: "Decepticon" },
    { imageSrc: `${basePath}/bumblebee.png`, name: "Bumblebee", faction: "Autobot" },
    { imageSrc: `${basePath}/palpatine.png`, name: "Palpatine", faction: "Decepticon" },
    { imageSrc: `${basePath}/optimus-prime.png`, name: "Optimus Prime", faction: "Autobot" },
]

class Search extends React.Component {

    render() {

        return (
            <div className={styles.root}>
                <div>
                    <Input 
                        onChange={(e) => console.log(e.target.value)} 
                        size="large" border={false} 
                        bgColor="dark" 
                        placeholder="E.g. Optimus Prime" />
                    <div className={styles.radio_buttons}>
                        <RadioButton onChange={(e) => console.log(e.target)} label="Autobots" name="faction" />
                        <RadioButton label="Decepticons" name="faction" />
                    </div>
                    <div className={styles.transformers_list}>
                        {
                            transformers.map((transformer, idx) => (
                                <Link key={idx} to={`${linkBasePath}/${transformer.name.toLowerCase()}/details`}>
                                    <RobotPreview 
                                        imageSrc={transformer.imageSrc}
                                        name={transformer.name}
                                        faction={transformer.faction} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search