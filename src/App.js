import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import {GlobalStyle} from "./style";
import MyRouter from './routes';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconStyle />
      <MyRouter />
    </div>
  );
}

export default App;
