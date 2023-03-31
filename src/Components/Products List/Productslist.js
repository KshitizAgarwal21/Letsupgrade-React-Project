import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import "./products.css";
import axios from "axios";
import { searchContext } from "../../Context/searchContext";
const columns = [
  { field: "ID", headerName: "ID", width: 70 },
  { field: "Category", headerName: "Category", width: 130 },
  { field: "Name", headerName: "Product Name", width: 130 },
  {
    field: "Price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "Shipping",
    headerName: "Shipping",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
  {
    field: "UnitsSold",
    headerName: "Units Sold",
    type: "number",
    width: 90,
  },
];

export default function Productslist() {
  const [category, setCategory] = React.useState("");

  const [temp, setTemp] = useState();
  const [rows, setRows] = useState();

  // const context = useContext(searchContext);
  // var searchVariable = context.searchVariable;
  // var updateSearchVariable = context.updateSearchVariable;
  const { searchVariable, updateSearchVariable } = useContext(searchContext);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const filter = async () => {
    const resp = await axios.post(
      "http://localhost:8080/filterproductsbycategory",
      { category: category }
    );
    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    console.log(arr);
    setRows(arr);
  };
  const search = () => {
    setRows(
      rows.filter((elem) => {
        return (
          elem.Name.toLowerCase().includes(searchVariable) ||
          elem.Category.toLowerCase().includes(searchVariable) ||
          elem.ID.toLowerCase().includes(searchVariable)
        );
      })
    );
  };
  const getProductList = async () => {
    const resp = await axios.post("http://localhost:8080/getproducts");

    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    setTemp(arr);
    setRows(arr);
  };
  useEffect(() => {
    getProductList();
  }, []);
  useEffect(() => {
    filter();
  }, [category]);

  useEffect(() => {
    if (searchVariable != "") {
      search();
    } else {
      setRows(temp);
    }
  }, [searchVariable]);
  return (
    <div className="productlist-container">
      <h2>Product List </h2>
      {rows && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: "1px solid #efefef",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
              <MenuItem value="Kitchen">Kitchen</MenuItem>
            </Select>

            <FormHelperText></FormHelperText>
          </FormControl>
          <div style={{ height: 600, width: "90%", marginLeft: "10px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Box>
      )}
    </div>
  );
}
