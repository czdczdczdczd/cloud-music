import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import {GlobalStyle} from "./style";
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './routes';

const Pages = () => {
  const element = useRoutes(routes);
  return element;
}
function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <IconStyle />
      {<Pages/>}
    </HashRouter>
  );
}

export default App;
