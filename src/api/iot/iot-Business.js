const IotRepository = require('./iot-Repository');

const insertData = async(data) => {
    return IotRepository.insertData(data);
};

module.exports = {insertData}