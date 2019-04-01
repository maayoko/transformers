/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import Select from "../../../components/Select/Select";
import FormGroup from "../../../components/FormGroup/FormGroup";

const General = ({
	transformer,
	factionsOptions,
	onNameChange,
	onStatusChange,
	onFactionChange,
	statusOptions,
	styles
}) => (
	<div className={styles.root}>
		<FormGroup>
			<Label htmlFor="name">Name</Label>
			<Input
				value={transformer.name}
				placeholder="E.g. Optimus Prime"
				onChange={onNameChange}
				id="name"
			/>
		</FormGroup>
		<FormGroup>
			<Label htmlFor="status">Status</Label>
			<Select placeholder onChange={onStatusChange} id="status" options={statusOptions} />
		</FormGroup>
		<FormGroup>
			<Label htmlFor="faction">Faction</Label>
			<Select placeholder onChange={onFactionChange} id="faction" options={factionsOptions} />
		</FormGroup>
	</div>
);

export default General;
