import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './styles/styled'

import Provider from './i18n/useLocale'

import { Locale } from './i18n/interface'

const defaultLocale: Locale = 'ko'
const fallbackLocale: Locale = 'en'

function Index() {
  const [selectedLocale, setLocale] = useState<Locale>(
    navigator.language as Locale
  )
  return (
    <Provider
      value={{ selectedLocale, defaultLocale, fallbackLocale, setLocale }}>
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
