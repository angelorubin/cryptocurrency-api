import http from "axios";

const COIN_MARKET_CAP_URI =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=";

/*
fetch(`${COIN_MARKET_CAP_URI}${process.env.COIN_MARKET_CAP_API_KEY}`)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
*/

const JPH_URI = "https://jsonplaceholder.typicode.com/users";
const API_URI = `${COIN_MARKET_CAP_URI}${process.env.COIN_MARKET_CAP_API_KEY}`;

const root = document.querySelector("#root");

let texto = "";

http
  .get(JPH_URI)
  .then((users) => {
    console.log(users.data[1].name);

    for (let i = 0; i < 10; i++) {
      texto = texto + `<li>${users.data[i].name}</li>`;
      root.innerHTML = `<ul>texto</ul>`;
    }
  })
  .catch((error) => {
    return error;
  });
