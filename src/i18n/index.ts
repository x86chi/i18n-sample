import { createContext, Dispatch, SetStateAction, useContext } from 'react'

import I18n, { Locale, Phrases } from './interface'

import pages from './pages'

interface LocaleContext {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>> | null
}

const context = createContext<LocaleContext>({
  locale: 'en',
  setLocale: null,
})

const supportedLocales = {
  ko: '한국어',
  en: 'English',
  es: 'Español',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  km: 'ភាសាខ្មែរ',
  lt: 'Lietuvių',
  nl: 'Nederlands',
  pl: 'polski',
  pt: 'Português',
  'pt-BR': 'Português (Brazil)',
  th: 'ภาษาไทย',
  de: 'Deutsch',
  'zh-Hans': '中文 (简体)',
} as Record<Locale, string>

type PageKey = keyof I18n

export function useLocale<Page extends I18n[PageKey]>(pageName: PageKey) {
  const { locale, setLocale } = useContext(context)

  const selectedLocale = locale.startsWith('en') ? 'en' : locale

  const page = pages[pageName]
  return {
    selectedLocale,
    supportedLocales,
    setLocale,
    locale: function (name: keyof Page) {
      // @ts-ignore
      const message = page[name] as Phrases
      const phrase = message[selectedLocale]

      if (selectedLocale === 'ko' && phrase === undefined) return name
      return phrase ?? message.en
    },
  }
}

export default context.Provider
