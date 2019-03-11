const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = `https://api.darksky.net/forecast/d40c53933a099f467e23c615aa1db401/${latitude},${longitude}?units=si`;
    
    request({url: url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services', undefined);
        }else if(body.error){
            callback('Unable to find weather information. Try another time', undefined);
        }else{            
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. The high today is '+body.daily.data[0].temperatureHigh+' With a low of '+body.daily.data[0].temperatureLow+' There is a ' + body.currently.precipProbability + '% chance of rain. ');
        }
    });
};

module.exports = forecast;