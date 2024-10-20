const Router = require('koa-router')
const getMsg = new Router()
const { getRandomMessages } = require('../../RandMess/index')


getMsg.get('/new-message', (ctx) => {
    const date = new Date()
    const messages = getRandomMessages(2)
    ctx.response.status = 200;
    ctx.response.body = JSON.stringify({
        "status": "ok",
        "timestamp": date.getTime(),
        "messages": messages
    })
})

module.exports = {getMsg}