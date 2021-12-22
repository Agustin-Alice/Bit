import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';

import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  NativeSelect,
} from '@material-ui/core';
const useStyle = makeStyles({
  window: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    padding: '30 30 30 30em',
  },
});
const Selects = (props) => {
  // const classes = useStyle();
  return (
    <FormControl>
      <InputLabel htmlFor="Selector">ID</InputLabel>
      <NativeSelect
        className="classes.window"
        labelid="Select-Coin"
        id="Selector"
        onChange={props.handleCoin}
        value={props.coin}
      >
        {props.listCoins.map((element) => (
          <option value={element.id}>{element.symbol}</option>
        ))}
      </NativeSelect>

      <Select
        labelid="Select-CoinVs"
        id="Versus"
        onChange={props.handleCoinVs}
        value={props.coinVs}
      >
        {props.listCoinsVs.map((element) => (
          <MenuItem key={element} value={element}>
            {element}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selects;

// <MenuItem key={element} value={element}>
//             {element}
//           </MenuItem>
