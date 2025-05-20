'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    static associate(models) {
      producto.belongsToMany(models.categoria, { as: 'categoria', through: 'categoriaproducto', foreignKey: 'productoid' });
      producto.belongsTo(models.archivo);
      //producto.belongsToMany(models.carritos, { as: 'carritos', through: 'carritoproducto', foreignKey: 'productoid'});
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
      defaultValue: "Sin titulo"
    },
    descripcion: {
      type: DataTypes.TEXT,
      defaultValue: "Sin descripcion"
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
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