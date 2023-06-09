const UserModel = require('../../models/User');

const save = async(user) => {
    const result = await UserModel.create(user);
    // console.log('User created-Repository', result);
    return result;
};

const findAll = async() => {
    const result = await UserModel.findAll({raw: true});
    return result
};

const getById = async(id) => {
    const result = await UserModel.findByPk(id, {raw: true});
    return result
};

const updated = async(item) => {
    const {id, name, password, cpf} = item;
    const result = await UserModel.update(
        {name, password, cpf} , {
            where: {
                id
            }
        }, {raw: true}
    );

    return result
};

const remove = async(id) => {
    const result = await UserModel.destroy({
        where: {
            id
        }
    }, {raw: true});
    return result
}

module.exports = {save, findAll, getById, updated, remove}