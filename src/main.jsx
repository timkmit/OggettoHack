import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <script src="bundle.js"></script>
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
            <Route path='/*' element={<App/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </>
  
)
