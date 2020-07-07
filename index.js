import http from "axios";
import $ from "jquery";

console.log($);

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
  .get(API_URI)
  .then((api) => {
    console.log(api.data.data);

    const { data } = api.data;

    const bitcoinImage = require("./static/assets/img/bitcoin.png");

    for (let i = 0; i < 10; i++) {
      texto =
        texto +
        `
          <section>
            <article>
              <img src=${bitcoinImage} width="20" alt="image-bitcoin"/>
            </article>
            <article>
              ${data[i].name}
            </article>
            <article>
              ${data[i].symbol}
            </article>
            <article>
              ${data[i].first_historical_data}
            </article>
          </section>
      `;

      root.innerHTML = `${texto}`;
    }
  })
  .catch((error) => {
    return error;
  });
