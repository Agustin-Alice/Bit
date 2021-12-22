import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import Selects from './Selects.js';

const Selector = (props) => {
  const [listCoins, setListCoins] = useState([]);
  const [listCoinsVs, setListCoinsVs] = useState([]);
  const [price, setPrice] = useState('');
  const [coin, setCoin] = useState();
  const [coinVs, setCoinVs] = useState();

  const handleList = setListCoins;

  const handleListVs = (list) => {
    // name.map((element) => console.log(element));
    setListCoinsVs(list);
  };
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
    // console.log(price);
    // console.log(coinVs);
    // console.log(coin);
    // console.log(event);
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
      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${coinVs}`
      ) // coin tiene adentro id y symbol.
        .then((res) => res.json())
        .then((result) => handlePrice(result));
    }
  }, [coin, coinVs]);

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

// const handleCoin = (prices) =>{
//     console.log(prices)
//     let str = coin
//     setPrice(prices.str.usd)
// }

// useEffect(() => {
//     setInterval(() =>{
//     fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
//     .then(res => res.json())
//     .then(result => handleCoin(result))
//     }, 10000);
// },[])

// <FormControl>
//             <InputLabel htmlFor='Selector'>Cripto</InputLabel>
//             <Select
//                 labelid= 'Select-Crypto'
//                 id= 'Selector'
//                 // onChange = {handleChange}
//                 >

//             <MenuItem value = {''} aria-label ='None'></MenuItem>
//             <MenuItem value = {'bitcoin'}>BTC</MenuItem>
//             <MenuItem value = {'ethereum'}>ETH</MenuItem>
//             <MenuItem value = {'vechain'}>VET</MenuItem>

//             </Select>

//         </FormControl>
