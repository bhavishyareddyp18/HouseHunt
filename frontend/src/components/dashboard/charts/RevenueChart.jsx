import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function RevenueChart({

  data = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Monthly Revenue
      </h5>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <AreaChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            fill="#93C5FD"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );
}

export default RevenueChart;