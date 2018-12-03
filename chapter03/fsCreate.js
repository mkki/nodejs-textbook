const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            fs.mkdir('./folder', (err) => {
                if (err) {
                    throw err;
                }
                
                console.log('폴더 생성');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err;
                    }

                    console.log('빈 파일 생성', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                        if (err) {
                            throw err;
                        }

                        console.log('이름 바꾸기')
                    });
                });
            });
        } else {
            console.log('폴더가 존재');
        }
    }
});