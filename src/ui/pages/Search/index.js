import React, { useState } from "react";
import { withTransformers } from "state/transformers";
import { withCurrentTransformer } from "state/currentTransformer";
import { withFactions } from "state/factions";
import Search from "./Search";

export default withTransformers(
	withFactions(
		withCurrentTransformer(({ transformers, factions, setCurrentTransformer }) => {
			const [searchTerm, updateSearchTerm] = useState();
			const [selectedFaction, updateSelectedFaction] = useState();

			const onSearchTermChange = e => {
				updateSearchTerm(e.target.value);
			};

			const onFactionChange = faction => () => {
				updateSelectedFaction(faction);
			};

			const filterTransformersBySearchTerm = transformer => {
				if (searchTerm) {
					return transformer.name.toLowerCase().match(searchTerm.toLowerCase());
				}

				return true;
			};

			const filterTransformersByFaction = transformer => {
				if (selectedFaction) {
					return transformer.faction._id === selectedFaction._id;
				}

				return true;
			};

			const searchTermService = { searchTerm, onSearchTermChange };
			const selectedFactionService = { selectedFaction, onFactionChange };
			const filterService = { filterTransformersByFaction, filterTransformersBySearchTerm };

			return (
				<Search
					transformers={transformers}
					setCurrentTransformer={setCurrentTransformer}
					factions={factions}
					searchTermService={searchTermService}
					selectedFactionService={selectedFactionService}
					filterService={filterService}
				/>
			);
		})
	)
);
