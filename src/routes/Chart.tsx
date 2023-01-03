import { useParams, useLocation } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { useQuery } from "@tanstack/react-query";
interface RouteState {
  state: { coinId: string };
}
function Chart() {
  const { state } = useLocation() as RouteState;
  const { isLoading, data } = useQuery(["ohlcv", state?.coinId], () =>
    fetchCoinHistory(state.coinId)
  );
  console.log(data);
  return <h1>Chart</h1>;
}

export default Chart;
