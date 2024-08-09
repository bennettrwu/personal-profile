import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './app/app-provider.tsx';

import 'normalize.css';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
