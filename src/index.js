import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

//const domain = process.env.REACT_APP_AUTH0_DOMAIN;
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain="dev-gef2ueqpsqnoe83i.us.auth0.com"
      clientId="wEoaBFEZZBhmKSamt1dqiy5JlwKM9ph1"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);