const { log } = require('console');
const os = require('os');

//info abt current user
const user = os.userInfo()
console.log(user);

//system uptime in seconds
console.log(`${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);