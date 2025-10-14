import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';

import AppProvider from './app/app-provider.tsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
