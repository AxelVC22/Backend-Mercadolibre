'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class bitacora extends Model {
        static associate(models) {
            // Relaciones
        }
    }

    bitacora.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
        elementoid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'bitacora'
    });
    return bitacora;
};