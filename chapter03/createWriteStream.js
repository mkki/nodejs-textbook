const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
    console.log('file write completed');
});

writeStream.write('add context');
writeStream.write('add context2');
writeStream.end();