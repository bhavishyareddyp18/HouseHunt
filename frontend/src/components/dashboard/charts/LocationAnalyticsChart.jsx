import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function LocationAnalyticsChart({

  data = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Trending Locations
      </h5>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="city" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="views"
            fill="#F97316"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default LocationAnalyticsChart;