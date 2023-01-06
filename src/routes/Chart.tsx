import { useParams, useLocation } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { darktheme } from "../theme";

interface RouteState {
  state: { coinId: string };
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: string;
}

interface Icandle {
  x: Date;
  y: number[];
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
        type="candlestick"
        series={[
          {
            name: "Price",
            data: data?.map((price) => {
              return {
                x: new Date(price.time_open * 1000),
                y: [
                  parseFloat(price.open),
                  parseFloat(price.high),
                  parseFloat(price.low),
                  parseFloat(price.close),
                ],
              };
            }) as Icandle[],
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            height: 400,
            width: 600,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            labels: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            type: "datetime",
          },

          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(2)}`,
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
