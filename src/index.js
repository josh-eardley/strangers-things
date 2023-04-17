import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main'
import { Login } from './components';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Main />
  </BrowserRouter>

);
