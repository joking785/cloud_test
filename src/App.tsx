import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
import Keycloack from 'keycloak-js';
import { authHeader } from './services/auth-header';

const initOptions = {
  url: 'http://localhost:8080',
  realm: 'master',
  clientId: 'account',
};

const kc = new Keycloack(initOptions);

kc.init({
  onLoad: 'login-required',
  checkLoginIframe: true,
  pkceMethod: 'S256',
}).then(
  (auth) => {
    if (!auth) {
      window.location.reload();
    } else {
      authHeader();
      kc.onTokenExpired = () => {
        console.log('token expired');
      };
    }
  },
  () => {
    console.error('Authentication Failed');
  },
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
