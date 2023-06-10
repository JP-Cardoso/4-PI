const {data} = require('./report-Controller');
const schema = require('./report-Schema');

const plugin = {
    name: 'report-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "GET",
                path: "/report",
                options: {
                    // validate: schema.insertDataPayload,
                    handler: data
                }
            }
        ]);
    })
};

module.exports = plugin;