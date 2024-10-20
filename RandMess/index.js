const { fakerRU, fa } = require('@faker-js/faker')

function* getRadnomMessage() {
    const userName = fakerRU.person.firstName()
    const from = {firstName: userName}
    let subject;
    if (Math.round(Math.random())) {
        const lastName = fakerRU.person.lastName()
        subject = `Весточка от ${userName} ${lastName}`;
        from.lastName = lastName;
    } else {
        subject = `Весточка от ${userName}`
    }
    const clock = new Date()
    const hour = clock.getHours() > 9 ? clock.getHours() : '0' + clock.getHours()
    const minute = clock.getMinutes() > 9 ? clock.getMinutes() : '0' + clock.getMinutes()
    const second = clock.getSeconds() > 9 ? clock.getSeconds() : '0' + clock.getSeconds()
    const day = clock.getDate() > 9 ? clock.getDate() : '0' + clock.getDate()
    const month = clock.getMonth() > 9 ? clock.getMonth() : '0' + clock.getMonth()
    yield {
        "id": fakerRU.string.uuid(),
        "from": fakerRU.internet.email(from),
        "subject": subject,
        "body": fakerRU.lorem.text(),
        "received": `${hour}:${minute}:${second} ${day}.${month}.${clock.getFullYear()}`
      }
}

function getRandomMessages(count) {
    const result = []
    const randomCount = Math.random() * count
    for (let index = 0; index < randomCount; index++) {
        const msg = getRadnomMessage()
        result.push(msg.next().value)
    }
    return result
}

module.exports = {
    getRandomMessages
}
