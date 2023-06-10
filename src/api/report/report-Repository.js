const IotModel = require('../../models/Iot');
const service = require('./service/report')

const data = async () => {
    const result = await IotModel.findAll({limit: 50, raw: true});
    // console.log( 'repository', result);
    return service.media(result)
    
};

module.exports = {data}