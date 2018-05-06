const request = require('request');

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    request({
        url: apiURL,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to access Google Server');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Invalid Address');
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            });
        }

    });
}

module.exports = {
    geocodeAddress
}