(async () => {
    const Wordlink = require('./')
    const fs = require('fs')
    const model = new Wordlink()
    model.add(['Node.js', 'nodeJS'], ['Node.js는 구글의 V8 엔진으로 구성된 자바스크립트 런타임 입니다.'])
    await model.train()
    // 모델 저장하기
    await model.save('nodejs.model.nlp')
    // 모델 불러오기
    model.load(fs.readFileSync('nodejs.model.nlp', 'utf8'))
    
    const answer = await model.answer('NodeJS가 무엇인가요?')
    console.log(answer)
})()