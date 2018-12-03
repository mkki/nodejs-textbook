const os = require('os');

console.log('====== 운영체제 정보');
console.log('os.arch(): ', os.arch());
console.log('os.release(): ', os.release());
console.log('==== 디렉토리');
console.log('os.homedir(): ', os.homedir());
console.log('os.tmpdir(): ', os.tmpdir());
console.log('==== cpu info');
console.log('os.cpus(): ', os.cpus());
console.log('os.cpus().length: ', os.cpus().length);
