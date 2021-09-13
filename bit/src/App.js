import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import { Select } from '@material-ui/core';
import Selector from './Components/Selector';
import { ifStatement } from '@babel/types';

const App = ()=> {
  const [coin, setCoin] = useState({})

  const editCoin = (name) => {
    setCoin(name)
  }
  return (
    <div className="App">
      <FormControl>
        <Selector
        props = {coin}
        handlecoin = {editCoin}
        
        />
      </FormControl>
      
    </div>
  );
}



export default App;
