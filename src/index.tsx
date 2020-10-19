import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Provider from './i18n'

import { Locale } from './i18n/interface'

function Index() {
  const [locale, setLocale] = useState<Locale>(navigator.language as Locale)
  return (
    <Provider value={{ locale, setLocale }}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)
