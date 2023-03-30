import React, { useState } from "react";
import "./add.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import General from "../General /General";
import Shipping from "../Shipping/Shipping";
import axios from "axios";
export default function AddProduct() {
  const [value, setValue] = React.useState("1");
  const [productData, setProductData] = useState({});
  const addProductAPI = async () => {
    const resp = await axios.post(
      "http://localhost:8080/addproduct",
      productData
    );
    console.log(resp.data);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="productlist-container">
        <h2>Add New Product</h2>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="General" value="1" />
                <Tab label="Shipping" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <General
                state={{ value, setValue, productData, setProductData }}
              />
            </TabPanel>
            <TabPanel value="2">
              <Shipping state={{ productData, setProductData }} />
            </TabPanel>
          </TabContext>
          <button className="action-img save" onClick={addProductAPI}>
            Add Product
          </button>
        </Box>
      </div>
    </div>
  );
}
