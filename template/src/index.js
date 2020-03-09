import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@reach/slider/styles.css'
import './styles/styles.scss'

import App from './app'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
