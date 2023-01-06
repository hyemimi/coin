import ApexCharts from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
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
function Price() {
  const { state } = useLocation() as RouteState;
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", state?.coinId]);
  return <h1>Price</h1>;
}

export default Price;
