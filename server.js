const Hapi = require("@hapi/hapi");
const routes = require('./src/config/routes');
require('./src/database/index');


const server = Hapi.server({
    port: 8005,
    host: "localhost",
    routes: {
        cors: true
    }
});

const plugins = [
    {
        plugin: routes, options: {
            // /home/joao/Área de Trabalho/PI/4-PI/src
            routesBaseDir: "./src/api"
        }
    }
]


module.exports = { server, plugins };