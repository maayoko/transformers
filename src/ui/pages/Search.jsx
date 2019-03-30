/**
 * External deps
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Internal deps
 */
import Input from "../components/Input/Input";
import RadioButton from "../components/RadioButton/RadioButton";
import Button from "../components/Button/Button";
import RobotPreview from "../components/RobotPreview/RobotPreview";
import Group from "../components/Group/Group";
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

const Search = () => {
	return (
		<Group fullWidth vertical align="center" className={styles.root}>
			<Group vertical>
				<Input
					onChange={e => console.log(e.target.value)}
					size="large"
					border={false}
					bgColor="dark"
					placeholder="E.g. Optimus Prime"
				/>
				<Group className={styles.radio_buttons}>
					<RadioButton
						onChange={e => console.log(e.target)}
						label="Autobots"
						name="faction"
					/>
					<RadioButton label="Decepticons" name="faction" />
					<Button type="basic">Clear</Button>
				</Group>
				<Group align="between" fullWidth wrap className={styles.transformers_list}>
					{transformers.map((transformer, idx) => (
						<Link
							key={idx}
							to={`${linkBasePath}/${transformer.name.toLowerCase()}/details`}>
							<RobotPreview
								imageSrc={transformer.imageSrc}
								name={transformer.name}
								faction={transformer.faction}
							/>
						</Link>
					))}
				</Group>
			</Group>
		</Group>
	);
};

export default Search;