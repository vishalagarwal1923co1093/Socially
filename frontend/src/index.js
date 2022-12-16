import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { AuthContext } from './context/AuthContext';
import { SearchQueryContext } from './context/SearchQueryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <SearchQueryContext>
        <App />
      </SearchQueryContext>
    </AuthContext>
  </React.StrictMode>
);