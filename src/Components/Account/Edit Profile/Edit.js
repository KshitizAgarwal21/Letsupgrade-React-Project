import { Box, InputLabel } from "@mui/material";
import React from "react";
import "./edit.css";
export default function Edit() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        border: "1px solid #efefef",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="display_picture"></div>
        <div style={{ marginTop: "25px" }}>
          <button className="action-img">Change Avatar</button>
          <button className="action-img uncolored">Remove</button>
        </div>
      </div>
      <div className="form-container">
        <div className="fields-container">
          <InputLabel className="input-label">Name</InputLabel>
          <input type="text" className="edit-fields"></input>
          <InputLabel className="input-label">Username</InputLabel>
          <input type="text" className="edit-fields"></input>
        </div>
        <div className="fields-container">
          <InputLabel className="input-label">Email</InputLabel>
          <input type="text" className="edit-fields"></input>
          <InputLabel className="input-label">DOB</InputLabel>
          <input type="text" className="edit-fields"></input>
        </div>
        <div className="fields-container">
          <InputLabel className="input-label">Phone No.</InputLabel>
          <input type="text" className="edit-fields"></input>
          <InputLabel className="input-label">City</InputLabel>
          <input type="text" className="edit-fields"></input>
        </div>
        <button className="action-img save">Save Changes</button>
      </div>
    </Box>
  );
}
