import React from "react";
import { InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
export default function Shipping(props) {
  const handleChange = (e) => {
    props.state.setProductData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h3>Shipping</h3>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Width:
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder="Width"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Height
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder="Height"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Weight
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder="Weight"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Shipping Fees
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder=" $"
          onChange={handleChange}
          name="Shipping"
        ></input>
      </Box>
    </div>
  );
}
