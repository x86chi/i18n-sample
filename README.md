# i18n sample project

[나인 크로니클] 론처의 국제화 관리를 위해 작성했던 코드를 재구성했습니다.

[나인 크로니클]: https://nine-chronicles.com/

## 특징

### 문구를 관심사 별로 묶어 관리할 수 있습니다

```json
{
  "intro": {
    "불러오는 중...": {
      "en": "Now Loading...",
      "pl": "Wczytywanie..."
    }
  },
  "learn": {
    "리엑트 배우기": {
      "en": "Learn React"
    }
  }
}
```

### 키의 이름이 기본 언어의 문구로 쓰이게 됩니다

앞의 블록에서 기본 언어는 한국어로 문구의 값이 표기 되지 않았습니다. 문구 자체가 키의 이름이 되기에 국제화 문구의 양이 적습니다.

```tsx
<label>{locale('리엑트 배우기')}</label>
```

다만 아래의 블록처럼 문단을 표현해야 하는 경우는 키의 이름을 별도로 두는 것을 권합니다. 기본 언어는 값이 명시되면 그 값을 키 대신에 사용합니다.

```json
{
  "description": {
    "ko": [
      "블록체인 위의 판타지 세계입니다.",
      "게임을 시작하기 전에, 계정 생성이 필요합니다"
    ],
    "en": [
      "This is a fantasy world on the blockchain.",
      "You need to create an account to start the game."
    ]
  }
}
```

### 키 이름을 타입 레벨에서 검증합니다

국제화 키 이름을 잘못 입력했는지 컴파일 타임에서 찾아줍니다.

<!-- 타입 인터페이스를 미리 정의해둔 덕분에 번역 기여자가 키 값을 바꾸는 실수를 방지합니다. -->

지금 예제처럼 문구의 관심사가 1가지이면 괜찮으나, 2가지 이상부터는 TS의 타입 추론 기능의 한계로 작동하지 않습니다.

그래서 문구의 정보가 담긴 타입 인터페이스를 아래 블록처럼 제너릭으로 손수 넣어주셔야 됩니다.

```ts
import { Intro } from './i18n/interface'

const { locale } = useLocale<Intro>('intro')
```

## License

The MIT License (MIT)

Copyright (c) 2020 iam@muhun.kim
