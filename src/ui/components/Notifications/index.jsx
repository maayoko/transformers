import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { withNotifications } from "state/notifications";
import styles from "./Notifications.module.scss";

export default withNotifications(({ notifications }) => {
	if (notifications) {
		toast(notifications.message, {
			hideProgressBar: true,
			bodyClassName: styles.body,
			className: styles.toast
		});
	}
	return null;
});
