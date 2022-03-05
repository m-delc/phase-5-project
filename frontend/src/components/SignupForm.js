import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import "../css/loginform.css";

const Signup = ({ user, setUser, isAuthenticated, setIsAuthenticated }) => {
  // IF YOU ADD THESE BACK, remember to add the params back in user controller
  // const [signupLastName, setSignupLastName] = useState("");
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);
  const navigate = useNavigate();

  // first password
  // first password
  // first password
  // first password
  const [initialPassword, setInitialPassword] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setInitialPassword({ ...initialPassword, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setInitialPassword({
      ...initialPassword,
      showPassword: !initialPassword.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // confirm password
  // confirm password
  // confirm password
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange2 = (prop) => (event) => {
    setConfirmPassword({ ...confirmPassword, [prop]: event.target.value });
  };
  const handleClickShowPassword2 = () => {
    setConfirmPassword({
      ...confirmPassword,
      showPassword: !confirmPassword.showPassword,
    });
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  function signupOnSubmit(e) {
    e.preventDefault();
    setSignupErrors([]);
    const user = {
      username: signupUsername,
      first_name: signupFirstName,
      password: initialPassword.password,
      password_confirmation: confirmPassword.password,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // console.log(user)
          setUser(user);
          setIsAuthenticated(true);
          // setSignupUsername("");
          // setSignupPassword("");
          // setPasswordConfirmation("");
          navigate("/home");
        });
      } else {
        res.json().then((json) => setSignupErrors(Object.entries(json.error)));
      }
    });
  }

  return (
    <form className="div-form" onSubmit={signupOnSubmit}>
      <br></br>

      <div>
        <Input
          className="test1"
          type="text"
          id="username"
          placeholder="Choose a username"
          variant="standard"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
        />
      </div>

      <br></br>
      <br></br>

      <div>
        <Input
          className="test1"
          type="text"
          id="firstname"
          placeholder="First name"
          variant="standard"
          value={signupFirstName}
          onChange={(e) => setSignupFirstName(e.target.value)}
        />
      </div>

      <br></br>

      <div>
        <Input
          id="first-password"
          type={initialPassword.showPassword ? "text" : "password"}
          value={initialPassword.password}
          onChange={handleChange("password")}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {initialPassword.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <br></br>

      <div>
        <Input
          id="confirm-password"
          type={confirmPassword.showPassword ? "text" : "password"}
          value={confirmPassword.password}
          onChange={handleChange2("password")}
          placeholder="Confirm password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword2}
              >
                {confirmPassword.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <br></br>

      <br></br>
      <br></br>

      <div className="btn-div">
        <Stack className="btn" direction="row" spacing={2}>
          <Button
            variant="outlined"
            endIcon={<CheckCircleOutlineIcon />}
            type="Submit"
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            endIcon={<ArrowBackIcon />}
            onClick={(e) => navigate("/login")}
          >
            Login
          </Button>
        </Stack>
      </div>
      {signupErrors ? signupErrors : null}
    </form>
  );
};

export default Signup;
