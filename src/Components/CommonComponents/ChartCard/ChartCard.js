import React, { useEffect, useState } from "react";
import "./chartcard.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

// const data = [
//   {
//     name: "Electronics",
//     uv: 1000,
//   },
// ];

export default function ChartCard() {
  const [data, setData] = useState();
  const getSalesData = async () => {
    const resp = await axios.post("http://localhost:8080/getsales");

    var arr = [];

    resp.data.map((elem) => {
      arr.push({ name: elem.Category, Sales: elem.ItemsSold });
    });

    setData(arr);
    console.log(data);
  };
  useEffect(() => {
    getSalesData();
  }, []);

  return (
    <div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Tooltip />
            <XAxis dataKey="name"></XAxis>
            <Bar dataKey="Sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
