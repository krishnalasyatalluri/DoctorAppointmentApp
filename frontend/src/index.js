import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/store/configureStore'
const store = configureStore()
const stripePromise = loadStripe('pk_live_51O41DFSFsVvTCUFtjhV9dNiTe6fftJME80hsdq69lfeBFbMiG3vTKUUHwQaW90IGfELRaOHerrCDSrMdlTububOK00i2EJww8j');
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>


    </Provider>




  </BrowserRouter>
)