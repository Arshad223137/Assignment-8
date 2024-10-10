import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const SnapBarChart = ({ reads }) => {
  const colors = [
    "#8884d8",
    "#83a6ed",
    "#8dd1e1",
    "#ffbb28",
    "#ff8042",
    "#00C49F",
  ];

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return (
      <path
        d={`M${x},${y + height} C${x + width / 3},${y + height} ${
          x + width / 2
        },${y + height / 3} 
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
          y + height
        } ${x + width}, ${y + height}
      Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

  function CustomTooltip({ payload, label, active }) {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#f5f5f5",
            border: "1px solid #ccc",
            padding: "4px",
          }}
        >
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="bg-pattern w-full h-auto p-4 shadow-md">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={reads}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="totalPages" shape={<TriangleBar />}>
            {reads.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SnapBarChart;
