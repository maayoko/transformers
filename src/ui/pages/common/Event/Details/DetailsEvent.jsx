import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Typography from "../../../../components/Typography/Typography";
import Group from "../../../../components/Group/Group";
import Image from "../../../../components/Image/Image";
import propTypes from "../common/types";

import EventImageSrc from "assets/images/svg/event_icon.svg";
import DeleteImageSrc from "assets/images/svg/cancel_circle_red.svg";
import UpdateImageSrc from "assets/images/svg/new_gold.svg";

const DetailsEvent = ({ event, styles, onDelete, setCurrent }) => (
	<Group align="end" vertical className={styles.root}>
		<Group vertical className={styles.action_buttons}>
			<Image src={UpdateImageSrc} title={"Update icon"} onClick={() => setCurrent(event)} />
			<Image src={DeleteImageSrc} title={"Delete icon"} onClick={() => onDelete(event)} />
		</Group>
		<Group className={styles.header} vertical>
			<Image className={styles.event_image} src={EventImageSrc} title="Event" />
			<Typography size="body-big" uppercase color="white">
				{event.title}
			</Typography>
		</Group>
		<Group align="between">
			<Group vertical>
				<Typography size="header-mid" color="white" as="h5">
					{moment(event.startDate).format("DD. MMM, YYYY")}
				</Typography>
				<Typography size="body-small" color="primary" uppercase>
					Date
				</Typography>
			</Group>
			<Group vertical>
				<Typography size="header-mid" color="white" as="h3">
					{moment(event.startTime).format("kk:mm")}
				</Typography>
				<Typography size="body-small" color="primary" uppercase>
					Start time
				</Typography>
			</Group>
			<Group vertical>
				<Typography size="header-mid" color="white" as="h3">
					{moment(event.endTime).format("kk:mm")}
				</Typography>
				<Typography size="body-small" color="primary" uppercase>
					End time
				</Typography>
			</Group>
		</Group>
	</Group>
);

DetailsEvent.propTypes = {
	event: propTypes.event,
	onDelete: PropTypes.func,
	setCurrent: PropTypes.func,
	styles: PropTypes.shape({})
};

DetailsEvent.defaultProps = {
	onDelete: () => {},
	setCurrent: () => {},
	styles: {}
};

export default DetailsEvent;
