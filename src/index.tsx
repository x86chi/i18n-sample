import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './styles/styled'

import Provider from './i18n'

import { Locale } from './i18n/interface'

function Index() {
  const [locale, setLocale] = useState<Locale>(navigator.language as Locale)
  return (
    <Provider value={{ locale, setLocale }}>
      <GlobalStyle />
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
