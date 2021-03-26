import { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "react-apollo";
import { limitText, isValidEmail } from "../helpers/validation.helper";
import { ADD_USER } from "../graphql";
import UserContext from "../context/UserContext";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: 550,
    marginTop: 12,
    padding: "0 12px",
    paddingBottom: 55,
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 8,
  },
  submit: {
    marginTop: 24,
    backgroundColor: "#8cd9a1",
  },
});

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");

  const [addUser] = useMutation(ADD_USER);
  const { setIsAuth, setCurrentUserId } = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();

  const handleEmailInput = useCallback(({ target: { value } }) => {
    let message = "";

    if (value.length === 0) {
      message = "This field can't be empty.";
    } else if (!isValidEmail(value)) {
      message = "Please enter a valid email.";
    } else {
      message = "";
    }

    setEmailErr(message);
    setEmail(value);
  }, []);

  const handlePassInput = useCallback(({ target }) => {
    const normValue = limitText(target.value, 20);

    let message = "";

    if (normValue.length === 0) {
      message = "This field can't be empty.";
    } else if (normValue.length < 5) {
      message = "Minimum 5 characters.";
    } else {
      message = "";
    }

    setPassErr(message);
    setPass(normValue);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await addUser({ variables: { email: email, password: pass } });

    const data = res.data;

    setCurrentUserId(data.addUser.token);
    setIsAuth(true);

    history.push("/");
  };

  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={classes.container}>
        <Typography component="h2" variant="h5">
          Sign In
        </Typography>
        <form
          action="/"
          method="POST"
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
        >
          <TextField
            value={email}
            onChange={handleEmailInput}
            variant="outlined"
            margin="normal"
            id="email"
            name="email"
            label="Email"
            type="email"
            error={Boolean(emailErr)}
            helperText={emailErr}
            fullWidth
            required
            autoFocus
          />
          <TextField
            value={pass}
            onChange={handlePassInput}
            variant="outlined"
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            error={Boolean(passErr)}
            helperText={passErr}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!(email && !emailErr && pass && !passErr)}
            fullWidth
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
}
