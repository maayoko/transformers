import React from "react";
import Button from "../components/Button/Button";
import styles from "./Home.module.scss";
import Typography from "../components/Typography/Typography";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
           <div className={styles.root}>
                <div className={styles.background_shape_image}>
                    <main className={styles.main}>
                        <div className={styles.background__image}>
                            <Button>
                                <Link to="/transformer/optimus-prime">Check me out</Link>
                            </Button>
                        </div>
                    </main>
                    <sidebar className={styles.sidebar}>
                        <Typography size="body-big" color="white">Transformers at your disposal</Typography>
                    </sidebar>
                </div>
           </div>
        );
    }
}

export default Home;