/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import FormGroup from "../../components/FormGroup/FormGroup";
import { withStatuses } from "state/statuses";
import { withFactions } from "state/factions";
import styles from "./General.module.scss";

const General = ({
	transformer,
	updateName,
	updateStatus,
	updateFaction,
	factions,
	factionsOptions,
	statuses,
	statusOptions
}) => {
	const handleChange = handler => e => {
		handler(e.target.value);
	};

	const handleSelectChange = (handler, values) => e => {
		const value = values.find(value => value._id === e.target.value);
		handler(value);
	};

	return (
		<div className={styles.root}>
			<FormGroup>
				<Label htmlFor="name">Name</Label>
				<Input
					value={transformer.name}
					placeholder="E.g. Optimus Prime"
					onChange={handleChange(updateName)}
					id="name"
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="status">Status</Label>
				<Select
					placeholder
					onChange={handleSelectChange(updateStatus, statuses)}
					id="status"
					options={statusOptions}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="faction">Faction</Label>
				<Select
					placeholder
					onChange={handleSelectChange(updateFaction, factions)}
					id="faction"
					options={factionsOptions}
				/>
			</FormGroup>
		</div>
	);
};

export default withStatuses(withFactions(General));
