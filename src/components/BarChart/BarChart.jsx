import { useNavigate } from "react-router-dom";
import {
  BarChart as BarChartRecharts,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { labels } from "../../consts";
import "./style.scss";
import { useCallback } from "react";

export const BarChart = ({ productsData }) => {
  const navigate = useNavigate();

  const onClick = useCallback((event) => {
    navigate(
      `/details/${event.tooltipPayload[0].name === "Фабрика А" ? 1 : 2}/${
        labels.findIndex((item) => item === event.labels) + 1
      }`
    );
  }, []);

  return (
    <div className="wrapper-chart">
      <ResponsiveContainer width={"100%"} height={600}>
        <BarChartRecharts data={productsData} margin={"auto"}>
          <XAxis
            dataKey={"labels"}
            style={{
              fontSize: "1.3rem",
              fontFamily: "Arial",
            }}
          />
          <YAxis
            ticks={[150, 300, 450, 600]}
            style={{
              fontSize: "1.3rem",
              fontFamily: "Arial",
            }}
          />
          <Tooltip shared={false} />
          <Legend wrapperStyle={{ fontSize: "1.3rem", fontFamily: "Arial" }} />
          <Bar
            onClick={onClick}
            name="Фабрика А"
            dataKey="data1"
            fill="#FE0000"
          />
          <Bar
            onClick={onClick}
            name="Фабрика Б"
            dataKey="data2"
            fill="#0000FE"
          />
        </BarChartRecharts>
      </ResponsiveContainer>
    </div>
  );
};
