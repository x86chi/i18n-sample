import I18n, { Locale, Phrases } from './interface'

import pages, { supportedLocales } from './pages'

export interface RequireProps {
  selectedLocale: Locale
  defaultLocale: Locale
  fallbackLocale: Locale
}

type PageKey = keyof I18n

export interface LocaleModuleProps extends RequireProps {
  pageName: PageKey
}

export default function localeModule<Page extends I18n[PageKey]>({
  selectedLocale,
  defaultLocale,
  fallbackLocale,
  pageName,
}: LocaleModuleProps) {
  const page = pages[pageName]
  return {
    selectedLocale,
    supportedLocales,
    locale: function (name: keyof Page) {
      // @ts-ignore
      const message = page[name] as Phrases
      const phrase = message[selectedLocale]

      if (selectedLocale === defaultLocale && phrase === undefined) return name

      const fallbackPhrase = message[fallbackLocale]
      if (!fallbackPhrase) throw Error('대체 값이 없습니다!')

      return phrase ?? fallbackPhrase
    },
  }
}
