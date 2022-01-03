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
    padding: '2em 0em 1em',
  },
});
const Selects = (props) => {
  const classes = useStyle();
  return (
    <FormControl className={classes.window}>
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
