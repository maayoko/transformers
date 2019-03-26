import React from "react";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import FormGroup from "../../components/FormGroup/FormGroup";
import styles from "./General.module.scss";

class General extends React.Component {

    render() {

        return (
            <div className={styles.root}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                        placeholder="E.g. Optimus Prime"
                        onClick={() => console.log("Clicked")}
                        id="name" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="status">Status</Label>
                    <Select 
                        placeholder
                        onChange={() => console.log("changed")}
                        id="status" 
                        options={["Select status...", "Injured", "OK", "MIA"]} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="status">Faction</Label>
                    <Select 
                        placeholder
                        onChange={() => console.log("changed")}
                        id="faction" 
                        options={["Select faction...", "Autobots", "Deceptions"]} />
                </FormGroup>
            </div>
        );
    }
}

export default General;