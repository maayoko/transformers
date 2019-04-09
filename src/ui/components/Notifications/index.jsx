import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { withNotifications } from "state/notifications";
import styles from "./Notifications.module.scss";

export default withNotifications(({ notifications }) => {
	useEffect(() => {
		if (notifications) {
			toast(notifications.message, {
				hideProgressBar: true,
				bodyClassName: styles.body,
				className: styles.toast,
				autoClose: 1500,
				onClose: () => {
					notifications.onClose && notifications.onClose();
				}
			});
		}
	}, [notifications]);

	return null;
});
