import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Copyright.module.css";

const bind = classNames.bind(styles);

export default function Copyright({
  text,
  color,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
}) {
  const classes = bind({
    copyright: true,
    [className]: className,
  });

  return (
    <small
      className={classes}
      style={{ ...style, color }}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      &copy; {text}
    </small>
  );
}

Copyright.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
