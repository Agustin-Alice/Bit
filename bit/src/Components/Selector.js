import React, { useEffect, useState, useRef } from 'react';
import { FormControl } from '@material-ui/core';
import Selects from './Selects.js';

const Selector = () => {
  const [listCoins, setListCoins] = useState([]);
  const [listCoinsVs, setListCoinsVs] = useState([]);
  const [price, setPrice] = useState('');
  const [coin, setCoin] = useState();
  const [coinVs, setCoinVs] = useState();

  const handleList = setListCoins;

  const handleListVs = setListCoinsVs;

  const handleCoin = (event) => {
    const coin = event.target.value;
    setCoin(coin);
  };

  const handleCoinVs = (event) => {
    const coinVs = event.target.value;
    setCoinVs(coinVs);
  };

  const handlePrice = (event) => {
    const price = event[coin][coinVs];
    setPrice(price);
  };

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then((res) => res.json())
      .then((result) => handleListVs(result));
  }, []);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
      .then((res) => res.json())
      .then((result) => handleList(result));
  }, []);

  useEffect(() => {
    if (coin === undefined || coinVs === undefined) {
      return console.log('casi');
    } else {
      searchPrice();
      switchInterval();
    }
  }, [coin, coinVs]);

  const searchPrice = () => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${coinVs}`
    )
      .then((res) => res.json())
      .then((result) => handlePrice(result));
  };
  const idInterval = useRef();
  const switchInterval = () => {
    clearInterval(idInterval.current);
    idInterval.current = setInterval(searchPrice, 5000);
  };
  return (
    <FormControl>
      <Selects
        listCoins={listCoins}
        handleCoin={handleCoin}
        coin={coin}
        coinvs={coinVs}
        handleCoinVs={handleCoinVs}
        listCoinsVs={listCoinsVs}
      />
      <h1>${price}</h1>
    </FormControl>
  );
};

export default Selector;
