var i = 1;

setInterval(() => {
    if(i == 5) {
        console.log('종료');
        process.exit(1);
    }
    console.log(i);
    i += 1;
}, 1000);