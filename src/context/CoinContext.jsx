import { createContext, useEffect } from "react";
import { useState } from "react";

export const CoinContext = createContext();
const CoinProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-vpd5JemQyexMaUCpzeyU1KYL",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoins(response))
      .catch((err) => console.error(err));
  };
      useEffect(() => {
            fetchAllCoin();
      }, [currency]);
      const contextValue = {
        allCoins, currency, setCurrency
      };
    
  return (
    <CoinContext.Provider value={contextValue}>{props.children}</CoinContext.Provider>
  );
};
export default CoinProvider;
