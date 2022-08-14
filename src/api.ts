import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then((response) => response.data);
};

export const fetchCoinInfo = async (coinId: string) => {
  return await axios
    .get(`${BASE_URL}/coins/${coinId}`)
    .then((response) => response.data);
};

export const fetchCoinTickers = async (coinId: string) => {
  return await axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((response) => response.data);
};
