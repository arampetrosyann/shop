import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Main.module.css";

const bind = classNames.bind(styles);

export default function Main({ bgColor, className, style, children }) {
  const classes = bind({
    main: true,
    [className]: className,
  });

  return (
    <main className={classes} style={{ ...style, backgroundColor: bgColor }}>
      {children}
    </main>
  );
}

Main.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
