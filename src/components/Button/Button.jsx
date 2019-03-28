import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import styles from "./Button.module.scss";
import classNames from "classnames";

const buttonTypes = {
	BUTTON: "button",
	BASIC: "basic"
};

const Button = ({ variant, onClick, style, type, className, children }) => {
	const classes = classNames(styles.root, className);
	const [{ x, y }, updateTextDimensions] = useState({ x: 40, y: 46 });
	const svgRef = useRef();

	useEffect(() => {
		if (type === buttonTypes.BUTTON) {
			const { height: svgHeight, width: svgWidth } = svgRef.current.getBoundingClientRect();
			const textElem = svgRef.current.getElementsByTagName("text")[0];
			const { height: textHeight, width: textWidth } = textElem.getBoundingClientRect();
			updateTextDimensions({
				x: (svgWidth - textWidth) / 2 + 7,
				y: svgHeight - textHeight
			});
		}
	});

	return (
		<div className={classes} style={style} onClick={onClick}>
			{type === buttonTypes.BUTTON ? (
				<svg
					ref={svgRef}
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					height="66"
					width="188">
					<g fill="none" className={styles[variant]}>
						<path d="M2 63 H186 V3 L15 15 Z" />
						<text x={x} y={y} fill="black" className={`${styles.text}`}>
							{children}
						</text>
					</g>
				</svg>
			) : (
				<button onClick={onClick} className={styles.basic} type="button">
					<Typography size="body-big" color="primary">
						{children}
					</Typography>
				</button>
			)}
		</div>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(["primary"]),
	onClick: PropTypes.func,
	type: PropTypes.oneOf([buttonTypes.BUTTON, buttonTypes.BASIC]),
	style: PropTypes.shape({}),
	className: PropTypes.string
};

Button.defaultProps = {
	variant: "primary",
	onClick: () => {},
	type: buttonTypes.BUTTON,
	className: ""
};

export default Button;
