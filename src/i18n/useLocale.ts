import { createContext, Dispatch, SetStateAction, useContext } from 'react'

import I18n, { Locale } from './interface'
import { supportedLocales } from './pages'
import localeModule, { RequireProps } from '.'

interface LocaleContext extends RequireProps {
  setLocale: Dispatch<SetStateAction<Locale>> | null
}

const context = createContext<LocaleContext>({
  selectedLocale: 'en',
  defaultLocale: 'ko',
  fallbackLocale: 'en',
  setLocale: null,
})

export function useLocale(pageName: keyof I18n) {
  const {
    selectedLocale,
    defaultLocale,
    fallbackLocale,
    setLocale,
  } = useContext(context)

  return {
    setLocale,
    supportedLocales,
    ...localeModule({
      selectedLocale: selectedLocale.startsWith('en') ? 'en' : selectedLocale,
      pageName,
      defaultLocale,
      fallbackLocale,
    }),
  }
}

export default context.Provider
