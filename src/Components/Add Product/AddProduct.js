import React, { useState } from "react";
import "./add.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import General from "../General /General";
import Shipping from "../Shipping/Shipping";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
export default function AddProduct() {
  const [value, setValue] = React.useState("1");
  const [productData, setProductData] = useState({});
  const [formData, setFormData] = useState();
  const [success, setSuccess] = useState(false);
  const addProductAPI = async () => {
    const resp = await axios.post(
      "http://localhost:8080/addproduct",
      productData
    );
    if (resp.data.msg === "Product added successfully") {
      formData.append("ID", resp.data.ID);
      const addedImage = await axios.post(
        "http://localhost:8080/uploadprodimages",
        formData
      );
      if (addedImage.data.msg === "file uploaded successfully") {
        setSuccess(true);
      }
    }
    // console.log(resp.data);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="productlist-container">
        <h2>Add New Product</h2>
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Product added successfully <strong>check it out!</strong>
          </Alert>
        )}

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
                state={{
                  value,
                  setValue,
                  productData,
                  setProductData,
                  setFormData,
                }}
              />
            </TabPanel>
            <TabPanel value="2">
              <Shipping state={{ productData, setProductData, formData }} />
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
