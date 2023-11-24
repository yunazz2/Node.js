// 운영체제의 정보를 알 수 있음
// 플랫폼(win32, linux 등), 
const os = require('os');

console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('Type:', os.type());
console.log('Uptime:', os.uptime());
console.log('Hostname:', os.hostname());
console.log('Release:', os.release());
console.log('Home Directory:', os.homedir());
console.log('CPUs:', os.cpus());
console.log('CPU 코어 개수:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());