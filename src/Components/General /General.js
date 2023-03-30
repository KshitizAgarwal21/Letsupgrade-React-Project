import React, { useState } from "react";
import "./general.css";
import Box from "@mui/material/Box";
import { InputLabel } from "@mui/material";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
export default function General(props) {
  const handleChange = (e) => {
    props.state.setProductData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
          onChange={handleChange}
          name="Name"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Price
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder=" $ Price"
          onChange={handleChange}
          name="Price"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Quantity
        </InputLabel>
        <input
          type="number"
          className="product-input-desc"
          placeholder="Quantity"
          onChange={handleChange}
          name="Quantity"
        ></input>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Category
        </InputLabel>
        <select
          className="category-dropdown"
          onChange={handleChange}
          name="Category"
        >
          <option selected value=""></option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Furniture">Furniture</option>
        </select>
        <button
          className="action-img save"
          onClick={() => {
            props.state.setValue("2");
            console.log(props.state.productData);
          }}
        >
          Next
        </button>
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
