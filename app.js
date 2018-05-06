// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
// const args = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
// // console.log(args)
// // https://www.forecast.io

// geocode.geocodeAddress(args.address, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
    uri: 'https://api.darksky.net/forecast/9d3e73893ff888f0f9ad26ff1835d7d7/6.504164200000001,3.3370619',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect darksky.net server')
    } else if (response.statusCode === 400 || response.statusCode === 403) {
        console.log('Invalid Address');
    } else if(!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    } else {
        console.log('Unable to fetch weather api')
    }
});