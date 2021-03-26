import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Box, Link } from "@material-ui/core";
import { AiFillGithub } from "react-icons/ai";
import styles from "./Footer.module.css";
import { Copyright } from "../";

const bind = classNames.bind(styles);

export default function Footer({ bgColor, className, style }) {
  const classes = bind({
    footer: true,
    [className]: className,
  });

  return (
    <footer className={classes} style={{ ...style, backgroundColor: bgColor }}>
      <Copyright text={new Date().getFullYear() + " | All Rights Reserved"} />

      <Box display="flex" padding="4px 9px" alignItems="center">
        <Box component="span" marginRight="8px">
          Created by
        </Box>

        <Link
          href="https://github.com/arampetrosyann"
          role="button"
          target="_blank"
          color="inherit"
        >
          <AiFillGithub fontSize={24} />
        </Link>
      </Box>
    </footer>
  );
}

Footer.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
