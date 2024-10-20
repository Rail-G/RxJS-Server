const Koa = require('koa')
const koa = new Koa()
const { koaBody } = require('koa-body')
const http = require('http')
const { router } = require('./routers/index')
const cors = require('koa2-cors')

koa.use(koaBody({
    urlencoded: true,
    multipart: true,
}))

koa.use(cors({
    origin: "*"
}))

koa.use(router())

const server = http.createServer(koa.callback())

server.listen(3030)