import React, { useEffect, useState } from 'react'
import logo from './assets/logo.svg'

import { useLocale } from './i18n'
import { Locale } from './i18n/interface'
import { Header, Link, Logo } from './styles/styled'

function App() {
  const { locale, selectedLocale, supportedLocales, setLocale } = useLocale(
    'intro'
  )

  type Phrases = Parameters<typeof locale>[0]
  const [title, setTitle] = useState<Phrases>('불러오는 중...')

  useEffect(() => {
    setInterval(() => {
      setTitle('리액트 배우기')
    }, 1000)
  }, [])

  const docs = locale('문서들')
  if (typeof docs === 'string')
    throw Error(`'문서들' 키는 문자열이 아닌 배열이여야 합니다.`)

  if (setLocale === null) throw Error('setLocale 이 비어 있습니다.')

  return (
    <Header>
      <Logo src={logo} alt='logo' />
      {title === '불러오는 중...' ? (
        <p>{locale(title)}</p>
      ) : (
        <Link href={docs[0]} rel='noopener noreferrer'>
          {locale(title)}
        </Link>
      )}
      <label htmlFor='change-language'>{locale('언어 변경하기:')}</label>
      <select
        id='change-language'
        value={selectedLocale}
        onChange={(event) => setLocale(event.target.value as Locale)}>
        {Object.keys(supportedLocales).map((languageCode) => (
          <option key={languageCode} value={languageCode}>
            {supportedLocales[languageCode]}
          </option>
        ))}
      </select>
    </Header>
  )
}

export default App
