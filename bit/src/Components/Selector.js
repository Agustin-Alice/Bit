import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, makeStyles, MenuItem } from '@material-ui/core';
import { result } from 'lodash';

const useStyle = makeStyles({
    select_style: {

    }

})


const Selector = (props) => {
    const [coin, setCoin] = useState('')
    const [price, setPrice] = useState('')

    const handleChange = (e) => {
        const name = e.target.value
        setCoin(name)
    }

    const handleCoin = (prices) =>{
        console.log(prices)
        if(coin === 'BTC'){setPrice(prices.bitcoin.usd)}
        else if(coin === 'VET'){setPrice(prices.vechain.usd)}
        else if (coin === 'ETH'){setPrice(prices.ethereum.usd)}

    }
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cvechain%2Cethereum&vs_currencies=usd')
        .then(res => res.json())
        .then(result => handleCoin(result))
    },[coin])
    useEffect(() => {
        setInterval(() =>{
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cvechain%2Cethereum&vs_currencies=usd')
        .then(res => res.json())
        .then(result => handleCoin(result))
        }, 10000);
    },[])

    const classes = useStyle()

    return(
        <FormControl>
            <InputLabel htmlFor='Selector'>Cripto</InputLabel>
            <Select
                className = {classes.select_style}
                labelid= 'Select-Crypto'
                id= 'Selector'
                onChange = {handleChange}
            >
            <MenuItem value = {''} aria-label ='None'></MenuItem>
            <MenuItem value = {'BTC'}>BTC</MenuItem>
            <MenuItem value = {'ETH'}>ETH</MenuItem>
            <MenuItem value = {'VET'}>VET</MenuItem>
            
            </Select>
            <h1>{price}</h1>

        </FormControl>
    )



}

  export default Selector;