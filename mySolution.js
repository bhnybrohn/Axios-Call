const axios = require("axios");
let coins;
const many = async () => {
  const res = await axios.get("https://api.coinranking.com/v2/coins");
  coins = res.data;
  console.log(coins);
};

many();
