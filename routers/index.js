const combineRoutes = require('koa-combine-routers')
const { getMsg } = require('./requests/NewMessage') 

const router = combineRoutes(
    getMsg
)

module.exports = { router }