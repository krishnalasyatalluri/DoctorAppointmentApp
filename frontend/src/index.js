import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './redux/store/configureStore'
const store=configureStore()
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />

    </Provider>
  
    
  
    
  </BrowserRouter>
)