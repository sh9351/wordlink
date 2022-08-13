# Wordlink - 손쉬운 자연어 처리
Wordlink는 [NLP.js](https://github.com/axa-group/nlp.js/)를 사용하여 복잡한 자연어 처리를 간단한 명령어로 가능하게 하는 패키지 입니다. 아래 예시를 참고하여 간단하게 자연어를 처리하여 답변하는 방법을 알아보세요.
## Quickstart
```js
// 모델 학습시키기
const Wordlink = require('wordlink.js')
const model = new Wordlink()
model.add(['Node.js', 'nodeJS'], ['Node.js는 구글의 V8 엔진으로 구성된 자바스크립트 런타임 입니다.'])
await model.train()
await model.save('nodejs.model.nlp')
```
```js
// 모델 사용하기
const Wordlink = require('wordlink.js')
const model = new Wordlink()
model.load(fs.readFileSync('nodejs.model.nlp', 'utf8'))
const answer = await model.answer('NodeJS가 무엇인가요?')
console.log(answer)
```

## 사용법
`new Wordlink`를 사용해서 새로운 학습 모델을 생성할 수 있어요. 그 후에는 `model.add`를 사용해서 단어와 이에 알맞는 답변을 추가할 수 있어요. 단어와 답변은 Array를 사용하여 한번에 여러개를 추가할 수 있어요. 모든 단어와 답변을 추가하였으면, `model.train`을 사용하여 모델을 학습할 수 있어요. 그 후 학습한 모델을 `model.save`를 활용하여 저장할 수 있어요. 그 후 저장한 모델을 불러와 사용하려면 `model.load`를 사용하세요.

## 외부 링크
[제작자 포트폴리오](https://sh9351.github.io)

[NLP.js](https://github.com/axa-group/nlp.js/)

[외주 문의](https://sh9351.github.io/outsource)