import { Input, Select } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
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

const layoutTypes: string[] = ["horizontal", "vertical", "centric", "radial"];
export const Test1 = (): ReactElement => {
  const [curveType, setCurveType] = useState(curveTypes[0]);
  const [layoutType, setLayoutType] = useState(layoutTypes[0]);
  const [strokeDasharray, setStrokeDasharray] = useState("3 3");

  // const isB = strokeDasharray == "4";

  return (
    <div style={{ height: "400px" }}>
      <Select
        onChange={(e) => {
          setCurveType(e.target.value);
        }}
        value={curveType}
      >
        {curveTypes.map((curve) => {
          return (
            <option key={curve} value={curve}>
              {curve}
            </option>
          );
        })}
      </Select>
      <Select
        onChange={(e) => {
          setLayoutType(e.target.value);
        }}
        value={layoutType}
      >
        {layoutTypes.map((curve) => {
          return (
            <option key={curve} value={curve}>
              {curve}
            </option>
          );
        })}
      </Select>
      <Input
        onChange={(e) => {
          setStrokeDasharray(e.target.value);
        }}
        value={strokeDasharray}
      />
      <ResponsiveContainer debounce={0} height="100%" width="100%">
        <LineChart
          data={data}
          height={300}
          layout={layoutType as LayoutType}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onClick={(state, e) => {
            console.log({ state, e });
          }}
          width={500}
        >
          <CartesianGrid
            accentHeight={50}
            allowReorder="yes"
            color="yellow"
            fill="black"
            stopColor="green"
            strokeDasharray={strokeDasharray}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            activeDot={{ r: 8 }}
            dataKey="pv"
            stroke="#8884d8"
            type={curveType}
          />
          <Line dataKey="uv" stroke="#82ca9d" type={curveType} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
