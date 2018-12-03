setInterval(() => {
    console.log('start');
    try {
        throw new Error('error occured');
    } catch (err) {
        console.log(err);
    }
}, 1000);