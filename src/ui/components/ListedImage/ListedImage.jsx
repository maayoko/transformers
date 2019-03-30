import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Image from "../Image/Image";
import styles from "./ListedImage.module.scss";

const ListedImage = ({ selected, disabled, className, children, ...other }) => {
	const classes = classNames(
		styles.root,
		className,
		{ [styles.selected]: selected },
		{ [styles.disabled]: disabled }
	);

	return (
		<div className={classes} {...other}>
			{children}
		</div>
	);
};

ListedImage.propTypes = {
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	style: PropTypes.shape({}),
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.instanceOf(Image)])
};

ListedImage.defaultProps = {
	className: "",
	style: {},
	selected: false,
	disabled: false
};

export default ListedImage;
