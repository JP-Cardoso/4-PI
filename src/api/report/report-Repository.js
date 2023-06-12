const IotModel = require('../../models/Iot');
const service = require('./service/report')

const data = async () => {
    const result = await IotModel.findAll({limit: 100, raw: true});
    // console.log( 'repository', result);
    console.log(service.media(result))
    return service.media(result)
};

const report = async () => {
    const result = await IotModel.findAll({limit: 100, raw: true});
    console.log(result);
}

module.exports = {data, report}