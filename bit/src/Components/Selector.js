import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, makeStyles, MenuItem } from '@material-ui/core';
import { createHandler } from 'workbox-precaching';

const useStyle = makeStyles({
    select_style: {

    }

})

const Selector = (props) => {

    const handleChange = (e) => {
        const name = e.target.value
        props.handlecoin(name)
    }

    const classes = useStyle()
    // const {coin} = props;
    return(
        <FormControl>
            <InputLabel htmlFor='Selector'>Cripto</InputLabel>
            <Select
                className = {classes.select_style}
                labelid= 'Select-Crypto'
                id= 'Selector'
                onChange = {handleChange}
                value ={props.coin}
            >
            <MenuItem value = {''} aria-label ='None'></MenuItem>
            <MenuItem value = {'BTC'}>BTC</MenuItem>
            <MenuItem value = {'ETH'}>ETH</MenuItem>
            <MenuItem value = {'VET'}>VET</MenuItem>
            
            </Select>
        </FormControl>
    )



}

  export default Selector;