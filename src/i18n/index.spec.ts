import localeModule, { LocaleModuleProps } from '.'
import { Locale } from './interface'

import pages, { supportedLocales } from './pages'

const defaultLocale: Locale = 'ko'

const initialProps: Omit<LocaleModuleProps, 'selectedLocale'> = {
  defaultLocale,
  fallbackLocale: 'en',
  pageName: 'intro',
}

describe('기본 언어를 쓰는 경우 키의 이름이 문구로 쓰이게 됩니다', () => {
  const keys = Object.keys(pages[initialProps.pageName])

  const { locale } = localeModule({
    ...initialProps,
    selectedLocale: defaultLocale,
  })

  for (const key of keys) {
    const phrase = locale(key)

    if (typeof phrase === 'string') {
      test(key, () => {
        expect(phrase).toBe(key)
      })
    }
  }
})

describe('나머지 경우 테스트', () => {
  const keys = Object.keys(pages[initialProps.pageName])

  for (const selectedLocale of Object.keys(supportedLocales)) {
    const { locale } = localeModule({
      ...initialProps,
      selectedLocale,
    })
    for (const key of keys) {
      const phrase = pages.intro[key][selectedLocale]
      if (selectedLocale === 'ko' && !phrase) {
        test('기본 언어이고, 값이 명시가 되지 않으면 키의 이름이 문구로 쓰입니다.', () => {})
        continue
      }

      const fallbackPhrase = pages.intro[key][initialProps.fallbackLocale]

      if (phrase) {
        test('출력 값이 있습니다. 기댓 값과 일치해야 합니다.', () => {
          expect(locale(key)).toBe(phrase ?? fallbackPhrase)
        })
      } else {
        test('출력 값이 없습니다. 대체 값과 일치해야 합니다.', () => {
          expect(locale(key)).toBe(fallbackPhrase)
        })
      }
    }
  }
})
