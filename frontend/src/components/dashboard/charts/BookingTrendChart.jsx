import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function BookingTrendChart({

  data = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Booking Trends
      </h5>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="bookings"

            stroke="#10B981"

            strokeWidth={3}

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}

export default BookingTrendChart;