const ss = require('simple-statistics')

function media(data)  {
    let Temperature = [];
    let Moustre = []
    for(let i = 0; i < data.length; i++) {
        Temperature.push(Number(data[i].temperature))
        Moustre.push(Number(data[i].moustre));
    };
    let mediaTemperature = ss.mean(Temperature);
    let mediaMoustre = ss.mean(Moustre);
    const obj = {temp: mediaTemperature, umid: mediaMoustre}
    return obj
};

module.exports = {media}