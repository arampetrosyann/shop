import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useMutation } from "react-apollo";
import classNames from "classnames/bind";
import styles from "./Navigation.module.css";
import { DELETE_USER } from "../../graphql/user.mutation";
import UserContext from "../../context/UserContext";

const bind = classNames.bind(styles);

export default function Navigation({ className, style }) {
  const [deleteUser] = useMutation(DELETE_USER);
  const { isAuth, setIsAuth, currentUserId, setCurrentUserId } = useContext(
    UserContext
  );

  const classes = bind({
    nav: true,
    [className]: className,
  });

  const handleSignOut = async () => {
    await deleteUser(currentUserId);

    setCurrentUserId("");
    setIsAuth(false);
  };

  return (
    <nav className={classes} style={style}>
      <ul className={styles.list}>
        {isAuth ? (
          <li onClick={handleSignOut}>
            <Link
              to="/"
              className={styles.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign Out
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/sign-in"
              className={styles.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
