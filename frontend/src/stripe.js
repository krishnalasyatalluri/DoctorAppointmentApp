// src/stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51O41DFSFsVvTCUFtjhV9dNiTe6fftJME80hsdq69lfeBFbMiG3vTKUUHwQaW90IGfELRaOHerrCDSrMdlTububOK00i2EJww8j');

export default stripePromise;
