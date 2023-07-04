import {
  PieChart as PieChartRecharts,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { pieChartColors } from "../../consts";

export const PieChart = ({ arrayOfProductsCount }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChartRecharts>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: "1.3rem", fontFamily: "Arial" }} />
        <Pie
          style={{ fontSize: "1.3rem", fontFamily: "Arial" }}
          data={arrayOfProductsCount}
          label
          labelLine={false}
          dataKey="value"
        >
          {arrayOfProductsCount.map((item, index) => (
            <Cell
              name={`Продукт ${index + 1}`}
              key={item.value}
              fill={pieChartColors[index % pieChartColors.length]}
            />
          ))}
        </Pie>
      </PieChartRecharts>
    </ResponsiveContainer>
  );
};
