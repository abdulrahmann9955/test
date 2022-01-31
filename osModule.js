const os = require('os')

const user = os.userInfo()

// console.log(user)

console.log(`isss ${os.uptime()}`)

const currentInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentInfo)
