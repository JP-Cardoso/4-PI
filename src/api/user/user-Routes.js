const { create, findAll, getById, updated, remove } = require('./user-Controller');
const schema = require('./user-Schema')

const plugin = {
    name: 'client-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "/clients",
                options: {
                    validate: schema.createdUser,
                    handler: create
                }
            },
            {
                method: "GET",
                path: "/clients",
                options: {
                    // validate: schema.findAll,
                    handler: findAll
                }
            },
            {
                method: "GET",
                path: "/client/{id}",
                options: {
                    validate: schema.getUserById,
                    handler: getById
                }
            },
            {
                method: "PUT",
                path: "/client/{id}",
                options: {
                    validate: schema.updatedUserById,
                    handler: updated
                }
            },
            {
                method: "DELETE",
                path: "/client/{id}",
                options: {
                    validate: schema.removedUserById,
                    handler: remove
                }
            },
        ]);
    })
};


module.exports = plugin;