import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Selector from './Components/Selector';


const App = ()=> {
  return (
    <div className="App">
      <FormControl>
        <Selector/>
      </FormControl>
      
    </div>
  );
}



export default App;
