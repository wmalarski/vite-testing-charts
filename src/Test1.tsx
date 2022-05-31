import { Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LayoutType } from "recharts/types/util/types";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const curveTypes = [
  "basis",
  "basisClosed",
  "basisOpen",
  "linear",
  "linearClosed",
  "natural",
  "monotoneX",
  "monotoneY",
  "monotone",
  "step",
  "stepBefore",
  "stepAfter",
];

const layoutTypes = ["horizontal", "vertical", "centric", "radial"];

export const Test1 = () => {
  const [curveType, setCurveType] = useState(curveTypes[0]);
  const [layoutType, setLayoutType] = useState(layoutTypes[0]);
  const [strokeDasharray, setStrokeDasharray] = useState("3 3");

  return (
    <div style={{ height: "400px" }}>
      <Select value={curveType} onChange={(e) => setCurveType(e.target.value)}>
        {curveTypes.map((curve) => (
          <option key={curve} value={curve}>
            {curve}
          </option>
        ))}
      </Select>
      <Select
        value={layoutType}
        onChange={(e) => setLayoutType(e.target.value)}
      >
        {layoutTypes.map((curve) => (
          <option key={curve} value={curve}>
            {curve}
          </option>
        ))}
      </Select>
      <Input
        value={strokeDasharray}
        onChange={(e) => setStrokeDasharray(e.target.value)}
      />
      <ResponsiveContainer width="100%" height="100%" debounce={0}>
        <LineChart
          layout={layoutType as LayoutType}
          width={500}
          height={300}
          data={data}
          onClick={(state, e) => {
            console.log({ state, e });
          }}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            stopColor="green"
            color="yellow"
            accentHeight={50}
            allowReorder="yes"
            strokeDasharray={strokeDasharray}
            fill="black"
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type={curveType}
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type={curveType} dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
