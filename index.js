const { NlpManager } = require('node-nlp')
module.exports = class Model {
    constructor(config) {
        this.manager = new NlpManager(config || { languages: ['ko'], forceNER: true })
    }
    async load(data) {
        this.manager.import(data)
    }
    add(document, answer) {
        const id = Math.random().toString(36)
        document.forEach(i => this.manager.addDocument('ko', i, id))
        answer.forEach(i => this.manager.addAnswer('ko', id, i))
    }
    async train() {
        await this.manager.train()
    }
    async save(path) {
        await this.manager.save(path)
    }
    async answer(question) {
        return (await this.manager.process('ko', question)).answer
    }
}