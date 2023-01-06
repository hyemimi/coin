import ApexCharts from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
interface Iusd {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

interface RouteState {
  state: { priceData: Iusd };
}
const Overview = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
`;
function Price() {
  const { state } = useLocation() as RouteState;

  /* percent_change_15m: -0.04
percent_change_30m: -0.09
percent_change_1h: -0.11
percent_change_6h: -0.29
percent_change_12h: -0.38
percent_change_24h: -0.23
percent_change_7d: 1.63
percent_change_30d: -0.24
percent_change_1y: -60.06
*/
  return (
    <>
      <Overview>
        🥇 ATH(All Time High) : {state.priceData.ath_price.toFixed(3)} 🥇
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_30m >= 0 ? "📈" : "📉"} 30m :{" "}
        {state.priceData.percent_change_30m}%
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_1h >= 0 ? "📈" : "📉"} 1h :{" "}
        {state.priceData.percent_change_1h}%{" "}
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_6h >= 0 ? "📈" : "📉"} 6h :{" "}
        {state.priceData.percent_change_6h}%{" "}
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_12h >= 0 ? "📈" : "📉"} 12h :{" "}
        {state.priceData.percent_change_12h}%{" "}
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_24h >= 0 ? "📈" : "📉"} 24h :{" "}
        {state.priceData.percent_change_24h}%{" "}
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_30d >= 0 ? "📈" : "📉"} 30d :{" "}
        {state.priceData.percent_change_30d}%{" "}
      </Overview>
      <Overview>
        {" "}
        {state.priceData.percent_change_1y >= 0 ? "📈" : "📉"} 1y :{" "}
        {state.priceData.percent_change_1y}%{" "}
      </Overview>
    </>
  );
}

export default Price;
