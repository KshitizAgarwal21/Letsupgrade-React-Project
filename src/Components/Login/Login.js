import React from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import loginimg from "../../assets/images/keyIllustration.svg";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="login-container">
        <div className="input-container">
          <TextField
            required
            id="outlined-required"
            label="Username"
            size="small"
            sx={{ width: "242px" }}
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            size="small"
            autoComplete="current-password"
            sx={{ width: "242px" }}
          />
          <br></br>
          <p>Forgot password</p>

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <br></br>
          <Button variant="contained" sx={{ width: "242px" }} onClick={login}>
            Log in
          </Button>
        </div>
        <div className="image-container">
          <img src={loginimg}></img>
        </div>
      </div>
    </div>
  );
}
