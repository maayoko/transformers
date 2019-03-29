import React from "react";
import PropTypes from "prop-types";
import { StyledSvgIcon } from "./style";

const SvgIcon = ({
  color,
  viewBox,
  fontSize,
  component: Component,
  children,
  ...other
}) => (
  <StyledSvgIcon
    as={Component}
    viewBox={viewBox}
    color={color}
    fontSize={fontSize}
    {...other}
  >
    {children}
  </StyledSvgIcon>
);

SvgIcon.propTypes = {
  /** The Component used for the root node. */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Color of the Component */
  color: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string
};

SvgIcon.defaultProps = {
  color: "inherit",
  component: "svg",
  viewBox: "0 0 24 24",
  fontSize: 24
};

export default SvgIcon;
