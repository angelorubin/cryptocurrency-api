const COIN_MARKET_CAP_API_KEY = "e5b9ab06-d4c1-4815-8182-2592b0899388";
const COIN_MARKET_CAP_URI =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=";
// senha: au6Fv5zFamFJeW6

console.log(COIN_MARKET_CAP_URI + COIN_MARKET_CAP_API_KEY);

fetch(`${COIN_MARKET_CAP_URI}${COIN_MARKET_CAP_API_KEY}`)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
