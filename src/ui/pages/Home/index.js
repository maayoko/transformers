import React from "react";
import { withTransformers } from "state/transformers";
import { withCurrentTransformer } from "state/currentTransformer";
import Home from "./Home";
import styles from "./Home.module.scss";
import { selectActive } from "../../utilities/selectActive";

export default withTransformers(
	withCurrentTransformer(({ transformers, setCurrentTransformer }) => {
		const selectActiveService = selectActive(transformers._idx);
		const transformer =
			transformers.find(t => t._id === selectActiveService.activeLinkIdx) || transformers[0];

		return (
			<Home
				selectActiveService={selectActiveService}
				styles={styles}
				transformers={transformers}
				setCurrentTransformer={setCurrentTransformer}
				transformer={transformer}
			/>
		);
	})
);
