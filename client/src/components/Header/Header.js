import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./Header.module.css";
import { Navigation } from "../";

const bind = classNames.bind(styles);

export default function Header({ bgColor, className, style }) {
  const classes = bind({
    header: true,
    [className]: className,
  });

  return (
    <header className={classes} style={{ ...style, backgroundColor: bgColor }}>
      <Link
        to="/"
        className={styles.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <AiOutlineHome size={58} />
      </Link>
      <Navigation />
    </header>
  );
}

Header.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
