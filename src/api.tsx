import axios from "axios";

export async function fetchCoins() {
  return await axios
    .get("https://api.coinpaprika.com/v1/coins/")
    .then((res) => res.data);
}

export async function fetchCoinInfo(coinId: string) {
  return await axios
    .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    .then((res) => res.data);
}

export async function fetchPriceInfo(coinId: string) {
  return await axios
    .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    .then((res) => res.data);
}

export async function fetchCoinHistory(coinId: string) {
  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    .then((res) => res.data);
}
