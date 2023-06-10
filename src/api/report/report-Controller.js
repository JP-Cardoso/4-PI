const reportBusiness = require('./report-Business');

const data = async(request, h) => {
    try {
        const result = await reportBusiness.data();
        console.log(result);
        return h.response(result)
    } catch (error) {
        console.error(error);
    }
};

module.exports = {data}