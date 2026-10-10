import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = [

  "#10B981",
  "#F59E0B",
  "#EF4444"

];

function PropertyStatusChart({

  data = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Property Status
      </h5>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie

            data={data}

            dataKey="value"

            nameKey="name"

            outerRadius={100}

          >

            {

              data.map(
                (
                  entry,
                  index
                ) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />

                )
              )

            }

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default PropertyStatusChart;