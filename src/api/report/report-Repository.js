const IotModel = require('../../models/Iot');
const service = require('./service/report')

const data = async () => {
    const result = await IotModel.findAll({limit: 100, raw: true});
    return service.media(result)
};

const report = async () => {
    const result = await IotModel.findAll({limit: 100, raw: true});
    return result
}

module.exports = {data, report}