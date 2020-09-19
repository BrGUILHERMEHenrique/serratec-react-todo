import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import api from './services/api';


import Routes from './routes';
import GlobalStyle from './styles/global'

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
  );
}

export default App;
