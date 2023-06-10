const reportRepository = require('./report-Repository');

const data = async () => {
    return await reportRepository.data();
};

module.exports = {data}