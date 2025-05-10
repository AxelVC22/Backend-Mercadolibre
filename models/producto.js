'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    static associate(models) {
      producto.belongsToMany(models.categoria, { as: 'categorias', through: 'categoriaproducto', foreignKey: 'productoid' });
      producto.belongsTo(models.archivo);
    }
  }

  producto.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      defaultValue: "Sin título"
    },
    descripcion: {
      type: DataTypes.TEXT,
      defaultValue: "Sin descripción"
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    archivoid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'producto',
  });

  return producto;
};
