import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import appStore from './redux/appStore.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <Toaster/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
)
