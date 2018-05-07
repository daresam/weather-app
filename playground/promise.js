var asyncAdd = (a, b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Not a Number');
            }
        }, 1500);
    });
};

asyncAdd(2, 6).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 30);
}).then((res) => {
    console.log('Should be 38', res)
}).catch(error => {
    console.log(error);
});