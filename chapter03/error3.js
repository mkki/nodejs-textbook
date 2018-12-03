process.on('uncaughtException', (err) => {
    console.error('uncaught exception', err);
});

setInterval(() => {
    throw new Error('error occured');
}, 1000);

setTimeout(() => {
    console.log('running..');
}, 2000);