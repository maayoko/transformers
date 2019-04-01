import React, { useEffect } from "react";
import { shuffle, sampleSize } from "lodash";
import { withTransformers } from "state/transformers";
import { withCurrentTransformer } from "state/currentTransformer";
import Home from "./Home";
import styles from "./Home.module.scss";
import { selectActive } from "../../utilities/selectActive";

export default withTransformers(
	withCurrentTransformer(({ transformers, setCurrentTransformer }) => {
		const selectActiveService = selectActive(transformers._idx);
		const _transformers = sampleSize(shuffle(transformers), 3);
		const transformer =
			_transformers.find(t => t._id === selectActiveService.activeLinkIdx) ||
			_transformers[0];

		useEffect(() => {});

		return (
			<Home
				selectActiveService={selectActiveService}
				styles={styles}
				transformers={_transformers}
				setCurrentTransformer={setCurrentTransformer}
				transformer={transformer}
			/>
		);
	})
);
