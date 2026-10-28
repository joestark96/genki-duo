import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Jeep sqlite component definition for web
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';

jeepSqlite(window);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

