import React from "react";
import "./general.css";
import Box from "@mui/material/Box";
import { InputLabel } from "@mui/material";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
export default function General() {
  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h3>Basic Info</h3>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Product Name
        </InputLabel>
        <input
          type="text"
          className="product-input"
          placeholder="Product Name"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Price
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder=" $ Price"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Description
        </InputLabel>
        <input
          type="text"
          className="product-input-desc"
          placeholder=""
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Category
        </InputLabel>
        <select className="category-dropdown">
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
        </select>
      </Box>
      <div
        className="chart-container"
        style={{ width: "50%", height: "395px" }}
      >
        <h3>Media</h3>
        <input type="file" className="upload"></input>
      </div>
    </div>
  );
}
