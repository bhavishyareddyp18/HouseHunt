import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function UserGrowthChart({

  data = []

}) {

  return (

    <div className="card p-4">

      <h5>
        User Growth
      </h5>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="users"
            fill="#8B5CF6"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default UserGrowthChart;