/**
 * External deps
 */
import React, { useState } from "react";
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
const basePath = "/assets/transformers-robots";
const linkBasePath = "/transformers";
const transformers = [
	{ imageSrc: `${basePath}/ironhide2.png`, name: "Ironhide", faction: "Decepticon" },
	{ imageSrc: `${basePath}/megatron.png`, name: "Megatron", faction: "Decepticon" },
	{ imageSrc: `${basePath}/bumblebee.png`, name: "Bumblebee", faction: "Autobot" },
	{ imageSrc: `${basePath}/palpatine.png`, name: "Palpatine", faction: "Decepticon" },
	{ imageSrc: `${basePath}/optimus-prime.png`, name: "Optimus Prime", faction: "Autobot" }
];

const Search = ({ transformers, factions }) => {
	const [searchTerm, updateSearchTerm] = useState();
	const [selectedFaction, updateSelectedFaction] = useState();

	const onInputChange = e => {
		updateSearchTerm(e.target.value);
	};

	const onRadioChange = faction => () => {
		updateSelectedFaction(faction);
	};

	return (
		<Group fullWidth vertical align="center" className={styles.root}>
			<Group vertical>
				<Input
					onChange={onInputChange}
					size="large"
					border={false}
					bgColor="dark"
					value={searchTerm}
					placeholder="E.g. Optimus Prime"
				/>
				<Group className={styles.radio_buttons}>
					{factions.map(faction => (
						<RadioButton
							checked={selectedFaction && faction._id === selectedFaction._id}
							key={faction._id}
							onChange={onRadioChange(faction)}
							label={faction.name}
							name="faction"
						/>
					))}
					<Button onClick={() => updateSelectedFaction(null)} type="basic">
						Clear
					</Button>
				</Group>
				<Group align="between" fullWidth wrap className={styles.transformers_list}>
					{transformers
						.filter(transformer => {
							if (searchTerm) {
								return transformer.name
									.toLowerCase()
									.match(searchTerm.toLowerCase());
							}

							return true;
						})
						.filter(transformer => {
							if (selectedFaction) {
								return transformer.faction._id === selectedFaction._id;
							}

							return true;
						})
						.map((transformer, idx) => (
							<Link
								key={idx}
								to={{
									pathname: `${linkBasePath}/${transformer.link}/details`,
									state: transformer
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
};

export default Search;
