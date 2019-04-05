import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Overlay.module.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import CloseIcon from "assets/images/svg/close_icon.svg";

const Overlay = ({ variant, children, closeButton, ...other }) => {
	const classes = classNames(styles.root, { [styles[variant]]: !!variant });
	const closeButtonObject = typeof closeButton === "object";

	return (
		<div className={classes} {...other}>
			{closeButton && (
				<BackgroundImage
					onClick={closeButtonObject ? closeButton.onClose : null}
					className={styles.close_button}
					src={CloseIcon}
					type="icon"
				/>
			)}
			<div>{children}</div>
		</div>
	);
};

Overlay.propTypes = {
	variant: PropTypes.oneOf(["fixed"]),
	closeButton: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			onClose: PropTypes.func
		})
	])
};

Overlay.defaultProps = {
	variant: "fixed",
	closeButton: false
};

export default Overlay;
