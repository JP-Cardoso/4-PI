const { Model, DataTypes } = require('sequelize');

class Iot extends Model {
    static init(sequelize) {
        super.init({
            temperature: DataTypes.INTEGER,
            moustre: DataTypes.INTEGER,
            dateInsert: DataTypes.DATE
        }, {
            sequelize,
            tableName: 'iot',
            underscored: false,
            createdAt: false,
            updatedAt: false
        })
    }
};

module.exports = Iot;