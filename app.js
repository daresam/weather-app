const yargs = require('yargs');
const axios = require('axios');



const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(apiURL).then(res => {
    if(res.data.results === 'ZERO_RESULTS') {
        throw new Error('Unable to get your address')
    } else if(res.data.status === 'OK') {
        
        const lat = res.data.results[0].geometry.location.lat;
        const long = res.data.results[0].geometry.location.lng;
        const weather =  `https://api.darksky.net/forecast/9d3e73893ff888f0f9ad26ff1835d7d7/${lat},${long}`;

        console.log(res.data.results[0].formatted_address);
        return axios.get(weather);
    }
    
}).then(res => {
    const temperature = res.data.currently.temperature;
    const apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} It feels like ${apparentTemperature}`);
}).catch(error => {
    if(error.code === 'ENOTFOUND') {
        console.log('Unable to connect Google Server')
    } else {
        console.log(error.message);
    }
});

