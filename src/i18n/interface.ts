export default interface I18n {
  intro: Intro
}

export type Locale = RequireLocale | OptionalLocale

export type OptionalLocale =
  | 'ko'
  | 'pl'
  | 'pt'
  | 'lt'
  | 'nl'
  | 'pt-BR'
  | 'km'
  | 'th'
  | 'id'
  | 'ja'
  | 'es'
  | 'de'
  | 'zh-Hans'

type RequireLocale = 'en'

export type Phrases = LocaleRecord | Description

type LocaleRecord = Record<RequireLocale, string> &
  Partial<Record<OptionalLocale, string>>

type Description = Record<RequireLocale, string[]> &
  Partial<Record<OptionalLocale, string[]>>

export interface Intro {
  '불러오는 중...': LocaleRecord
  '리액트 배우기': LocaleRecord
  '언어 변경하기:': LocaleRecord
  문서들: Description
}
