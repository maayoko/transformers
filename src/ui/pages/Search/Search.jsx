/**
 * External deps
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal deps
 */
import Input from "../../components/Input/Input";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import RobotPreview from "../../components/RobotPreview/RobotPreview";
import Group from "../../components/Group/Group";
import styles from "./Search.module.scss";

/**
 * Variables
 */
const linkBasePath = "/transformers";

const Search = ({
	transformers,
	factions,
	searchTermService,
	selectedFactionService,
	filterService,
	setCurrentTransformer
}) => (
	<Group fullWidth vertical align="center" className={styles.root}>
		<Group vertical>
			<Input
				onChange={searchTermService.onSearchTermChange}
				size="large"
				border={false}
				bgColor="dark"
				value={searchTermService.searchTerm}
				placeholder="E.g. Optimus Prime"
			/>
			<Group className={styles.radio_buttons}>
				{factions.map(faction => (
					<RadioButton
						checked={
							selectedFactionService.selectedFaction &&
							faction._id === selectedFactionService.selectedFaction._id
						}
						key={faction._id}
						onChange={selectedFactionService.onFactionChange(faction)}
						label={faction.name}
						name="faction"
					/>
				))}
				<Button onClick={selectedFactionService.onFactionChange(null)} type="basic">
					Clear
				</Button>
			</Group>
			<Group align="between" fullWidth wrap className={styles.transformers_list}>
				{transformers
					.filter(filterService.filterTransformersBySearchTerm)
					.filter(filterService.filterTransformersByFaction)
					.map(transformer => (
						<Link
							onClick={() => {
								setCurrentTransformer(transformer);
							}}
							key={transformer._id}
							to={{
								pathname: `${linkBasePath}/${transformer.link}/details`,
								search: "?edit=false",
								state: { currentTransformer: transformer }
							}}>
							<RobotPreview
								imageSrc={transformer.skin.image.standard}
								name={transformer.name}
								faction={transformer.faction.name}
							/>
						</Link>
					))}
			</Group>
		</Group>
	</Group>
);

export default Search;
