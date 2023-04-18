import React, { useEffect, useState } from "react";
import "./histogram.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//   },
// ];
export default function Histogram() {
  const [data, setData] = useState([]);
  const [category, setCategory] = React.useState("Electronics");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const getCategoryData = async () => {
    const resp = await axios.post(
      "http://localhost:8080/filterproductsbycategory",
      { category: category }
    );

    var arr = [];
    resp.data.map((elem) => {
      arr.push({
        Name: elem.Name,
        Price: elem.Price,
        Shipping: elem.Shipping,
        Quantity: elem.Quantity,
      });
    });
    setData(arr);
  };
  useEffect(() => {
    getCategoryData();
  }, [category]);

  // data.push({name:elem.Name, amt:elem.Price, uv: elem.Quantity, pv: elem.Shipping})

  return (
    <div>
      <div className="histogram-container">
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
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
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="Name"
              label={{
                value: "Pages",
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{ value: "Index", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="Quantity" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Shipping" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
