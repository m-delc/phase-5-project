import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import "../css/loginform.css";

function LoginForm({ user, setUser, isAuthenticated, setIsAuthenticated }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginError, setLoginError] = useState([]);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: loginUsername,
      password: values.password,
    };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newUser) => {
          setUser(newUser);
          setIsAuthenticated(true);
          navigate("/home");
        });
      } else {
        res.json().then((json) => setLoginError(json.error));
      }
    });
  };

  // for nav with button
  // for nav with button
  // for nav with button
  const handleSignupRoute = () => {
    navigate("/signup");
  };

  return (
    <form onSubmit={loginOnSubmit}>
      <div style={{ height: 305 }}>
        <br></br>

        <Input
          className="test1"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          type="text"
          label="Username"
          placeholder="Username"
        />

        <br></br>
        <br></br>

        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <br></br>
        <br></br>
        <br></br>
        <div className="test2">
          <Stack className="btn" direction="row" spacing={2}>
            <Button type="submit" variant="outlined" endIcon={<LoginIcon />}>
              Login
            </Button>

            <Button
              onClick={handleSignupRoute}
              variant="outlined"
              endIcon={<AddCircleOutlineIcon />}
            >
              Signup
            </Button>
          </Stack>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
