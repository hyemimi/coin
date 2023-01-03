import { useParams, useLocation } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";

interface RouteState {
  state: { coinId: string };
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart() {
  const { state } = useLocation() as RouteState;
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", state?.coinId],
    () => fetchCoinHistory(state.coinId)
  );
  return (
    <div>
      <ApexCharts
        type="line"
        series={[
          {
            name: "sales",
            data: data?.map((price) => price.close) as number[],
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            toolbar: {
              show: false,
            },
            height: 300,
            width: 600,
            background: "transparent",
          },

          grid: {
            show: false,
          },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            type: "datetime",
            categories: data?.map((price) => price.time_close),
          },
          fill: {
            type: "gradient",
            gradient: { gradientToColors: ["blue"], stops: [0, 100] },
          },
          colors: ["red"],
          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(2)}`,
            },
          },
        }}
      ></ApexCharts>
    </div>
  );
}

export default Chart;
