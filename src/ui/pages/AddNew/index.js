import React from "react";
import { withTransformer } from "state/transformer";
import { withTransformers } from "state/transformers";
import { useWindowBreakPoints } from "../../utilities/useWindowResize";
import AddNew from "./AddNew";
import styles from "./AddNew.module.scss";

export default withTransformers(
	withTransformer(({ ...other }) => {
		const basePath = "/transformers/add";
		const links = [
			{ to: `${basePath}/general`, label: "General" },
			{ to: `${basePath}/skin`, label: "Skin" },
			{ to: `${basePath}/vehicle`, label: "Vehicle" },
			{ to: `${basePath}/gear`, label: "Gear" }
		];

		const breakPoints = useWindowBreakPoints();
		breakPoints.isTabLand && links.push({ to: `${basePath}/preview`, label: "Preview" });
		return <AddNew styles={styles} breakPoints={breakPoints} links={links} {...other} />;
	})
);
