import { autocompleteClasses, Box, Button, TextField } from "@mui/material";
import React from "react";
import "./account.css";
export default function Account() {
  return (
    <div>
      <Box
        sx={{
          width: 600,
          height: 300,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15%",
          backgroundColor: "white",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "white",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <TextField
          required
          id="standard-required"
          label="First Name"
          variant="standard"
          className="myinput"
        ></TextField>
        <TextField
          required
          id="standard-required"
          label="Last Name"
          variant="standard"
          className="myinput"
        ></TextField>
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          className="myinput"
        ></TextField>
        <Button variant="contained" disableElevation className="mybutton">
          Update!
        </Button>
      </Box>
    </div>
  );
}
