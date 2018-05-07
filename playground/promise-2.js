const request = require('request');

var asyncGeoCode = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);
        const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

        request({
            url: apiURL,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to access Google Server');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Invalid Address');
            }
            else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
            } else {
                console.log('Unknow Error')
            }
    
        });
    });
}

asyncGeoCode('19146').then(res => {
    console.log(res)
}, error => {
    console.log(error)
})