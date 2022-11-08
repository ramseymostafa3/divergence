import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const stripePromise = loadStripe('pk_test_K64YglIBCsxehcEwZ55U7WUE00hsQHZORD');
const payPalConfig = {
  'client-id': 'AXglX6BQgUyfXJc0HBO326yx_JMrzG2htAtvFYa7Sj49iGMzi8xuy1gSYPCaRDQ8S6jtc4lmM9T2Apce',
  components: 'buttons',
  intent: 'subscription',
  vault: true,
  // 'disable-funding': 'card'
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#ee6535',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Elements stripe={stripePromise}>
            <PayPalScriptProvider options={payPalConfig}>
              <App />
            </PayPalScriptProvider>
          </Elements>
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
