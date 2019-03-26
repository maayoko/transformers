import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import styles from "./AddNew.module.scss";
import General from "./General";
import Skin from "./Skin";
import Vehicle from "./Vehicle";
import Gear from "./Gear";

class AddNew extends React.Component {

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <Link className={`${styles.link_nav} ${styles.active}`} to="/transformers/add/general">
                        <Typography size="body-mid" uppercase color="primary">General</Typography>
                    </Link>
                    <Link className={`${styles.link_nav}`} to="/transformers/add/skin">
                        <Typography size="body-mid" uppercase color="white">Skin</Typography>
                    </Link>
                    <Link className={`${styles.link_nav}`} to="/transformers/add/vehicle">
                        <Typography size="body-mid" uppercase color="white">Vehicle</Typography>
                    </Link>
                    <Link className={`${styles.link_nav}`} to="/transformers/add/gear">
                        <Typography size="body-mid" uppercase color="white">Gear</Typography>
                    </Link>
                </div>
                <div>
                    <Route exact path="/transformers/add/general" component={General} />
                    <Route exact path="/transformers/add/skin" component={Skin} />
                    <Route exact path="/transformers/add/vehicle" component={Vehicle} />
                    <Route exact path="/transformers/add/gear" component={Gear} />
                    <Route exact path="/transformers/add" component={() => <Redirect to="/transformers/add/general" />}/>
                </div>
                <div></div>
            </div>
        );
    }
}

export default AddNew;