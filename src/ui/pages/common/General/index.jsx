import React from "react";
import General from "./General";
import styles from "./General.module.scss";
import { withStatuses } from "state/statuses";
import { withFactions } from "state/factions";

export default withStatuses(
	withFactions(
		({
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
				<General
					transformer={transformer}
					factionsOptions={factionsOptions}
					statusOptions={statusOptions}
					onNameChange={handleChange(updateName)}
					onStatusChange={handleSelectChange(updateStatus, statuses)}
					onFactionChange={handleSelectChange(updateFaction, factions)}
					styles={styles}
				/>
			);
		}
	)
);
