const request = require('request');

const getWeather = (lat, long, callback) => {
    request({
        uri: `https://api.darksky.net/forecast/9d3e73893ff888f0f9ad26ff1835d7d7/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect darksky.net server')
        } else if (response.statusCode === 400 || response.statusCode === 403) {
            callback('Invalid Address');
        } else if(!error && response.statusCode === 200) {
            callback(undefined , {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather api')
        }
    });
};

module.exports.getWeather = getWeather;
 