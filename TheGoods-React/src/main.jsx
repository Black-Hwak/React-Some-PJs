import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './feature/services/store';
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    
<BrowserRouter>
<Provider store={store}>
  <App />
</Provider>
</BrowserRouter>
  </MantineProvider>

)
