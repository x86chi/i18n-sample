import I18n, { Locale } from './interface'

export const supportedLocales = {
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

const pages: I18n = {
  intro: {
    '불러오는 중...': {
      en: 'Now Loading...',
      pl: 'Wczytywanie...',
      pt: 'Carregando...',
      lt: 'Kraunasi...',
      nl: 'Laden...',
      es: 'Cargando...',
      'pt-BR': 'Carregando...',
      km: 'កំពុងដំណើរការ...',
      id: 'sedang memuat...',
      th: 'กำลังโหลด...',
      ja: '読み込み中...',
      de: 'Wird geladen...',
    },
    '리액트 배우기': {
      en: 'Learn React',
    },
    '언어 변경하기:': {
      en: 'Change Language',
    },
    문서들: {
      ko: ['ko.reactjs.org', 'reactjs.org'],
      en: ['reactjs.org', 'ko.reactjs.org'],
    },
  },
  //   menu: {},
  //   login: {},
}

export default pages
