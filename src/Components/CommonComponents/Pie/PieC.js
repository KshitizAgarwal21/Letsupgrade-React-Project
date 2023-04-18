import React, { useEffect, useState } from "react";
import "./pie.css";
import axios from "axios";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
// const data = [
//   { name: "Group A", value: 100 },
//   { name: "Group B", value: 100 },
//   { name: "Group C", value: 100 },
//   { name: "Group D", value: 100 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieC() {
  const [data, setData] = useState([{}]);
  const getProductList = async () => {
    const resp = await axios.post("http://localhost:8080/getproducts");

    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    var newarr = [];
    arr.map((elem) => {
      newarr.push({ name: elem.Category, value: elem.Quantity });
    });

    var reduced = newarr.reduce((acc, curr) => {
      if (acc[curr.name]) {
        acc[curr.name] = acc[curr.name] + curr.value;
      } else {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});

    let finalArr = [];
    for (let key in reduced) {
      finalArr.push({ name: key, value: reduced[key] });
    }

    setData(finalArr);
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <div className="pie-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              nameKey="name"
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
