import React, { useEffect, useState } from "react";
import { parse } from "query-string";
import { withCurrentTransformer } from "state/currentTransformer";
import { withTransformers } from "state/transformers";
import Details from "./Details";

export default withTransformers(
	withCurrentTransformer(
		({
			location,
			clearCurrentTransformer,
			currentTransformer,
			updateCurrentTransformer,
			deleteCurrentTransformer,
			updateName,
			updateSkin,
			updateFaction,
			updateStatus,
			addGear,
			removeGear,
			updateVehicle,
			history,
			...other
		}) => {
			const { edit, delete: _delete } = parse(location.search);
			const shouldEdit = JSON.parse(edit);
			const isDeletedEnabled = JSON.parse(_delete);
			const transformer =
				currentTransformer || (location.state && location.state.currentTransformer);

			const [editSkin, toggleEditSkin] = useState(false);
			const [editGeneral, toggleEditGeneral] = useState(false);
			const [editVehicle, toggleEditVehicle] = useState(false);
			const [editGear, toggleEditGear] = useState(false);

			const skinService = { editSkin, toggleEditSkin, updateSkin };
			const generalService = {
				editGeneral,
				toggleEditGeneral,
				updateName,
				updateStatus,
				updateFaction
			};
			const vehicleService = { editVehicle, toggleEditVehicle, updateVehicle };
			const gearService = { editGear, toggleEditGear, addGear, removeGear };

			const resetStates = () => {
				skinService.toggleEditSkin(false);
				generalService.toggleEditGeneral(false);
				vehicleService.toggleEditVehicle(false);
				gearService.toggleEditGear(false);
			};

			useEffect(() => {
				if (!shouldEdit && !isDeletedEnabled) {
					updateCurrentTransformer(transformer);
					resetStates();
				}

				if (isDeletedEnabled) {
					/* eslint-disable no-restricted-globals */
					const shouldDelete = confirm("Delete transformer?");
					shouldDelete ? deleteCurrentTransformer(transformer) : history.goBack();
				}
				return () => {
					// Clear current transformer only if we are not on details page
					const isDetailsPage = location.pathname.split("/").slice(-1)[0] === "details";
					!isDetailsPage && clearCurrentTransformer();
				};
			}, [transformer, location]);

			return (
				<Details
					transformer={transformer}
					edit={shouldEdit}
					skinService={skinService}
					generalService={generalService}
					vehicleService={vehicleService}
					gearService={gearService}
					{...other}
				/>
			);
		}
	)
);
