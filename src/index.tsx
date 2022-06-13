// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// react router
import { BrowserRouter } from 'react-router-dom';

// styles
import './index.scss';

// components
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
