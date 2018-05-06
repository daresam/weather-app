const request = require('request');
const yargs = require('yargs');

const args = yargs;

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=14%20fadipe%20street%20somolu%20nigeria',
    json:true
},(error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});