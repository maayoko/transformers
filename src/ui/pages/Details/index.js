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
			updateTransformer,
			updateName,
			updateSkin,
			updateFaction,
			updateStatus,
			addGear,
			removeGear,
			updateVehicle,
			...other
		}) => {
			const { edit } = parse(location.search);
			const shouldEdit = JSON.parse(edit);
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
				if (!shouldEdit) {
					updateTransformer(transformer);
					resetStates();
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
