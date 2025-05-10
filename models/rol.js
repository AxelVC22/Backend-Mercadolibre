'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class rol extends Model {
        static associate(models) {
            rol.hasMany(models.usuario, { foreignKey: 'roild' });
        }
    }

    rol.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'rol',
    });
    return rol;
};