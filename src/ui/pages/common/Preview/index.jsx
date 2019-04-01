import React from "react";
import Preview from "./Preview";
import styles from "./Preview.module.scss";

export default ({ transformer, onCreate }) => (
	<Preview transformer={transformer} onCreate={onCreate} styles={styles} />
);
