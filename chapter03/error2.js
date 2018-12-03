const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefgjs', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);