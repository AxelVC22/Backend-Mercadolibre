'use strict';
const bcrypt = require('bcrypt')
const crypto = require('crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const AdministradorUUID = crypto.randomUUID()
    const UsuarioUUID = crypto.randomUUID()

    await queryInterface.bulkInsert('rol', [
      { id: AdministradorUUID, nombre: 'Administrador', createdAt: new Date(), updatedAt: new Date() },
      { id: UsuarioUUID, nombre: 'Usuario', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('usuario', [
      { id: crypto.randomUUID(), email: 'gvera@uv.mx', passwordhash: await bcrypt.hash('J@xRrUv1030', 10), 
        nombre: 'Guillermo Vera', rolid: AdministradorUUID, protegido: true, createdAt: new Date(), updatedAt: new Date() },
      { id: crypto.randomUUID(), email: 'axel22@uv.mx', passwordhash: await bcrypt.hash('J@xRrUv1030', 10), 
        nombre: 'Axel', rolid: UsuarioUUID, createdAt: new Date(), updatedAt: new Date() }
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rol', null, {})
    await queryInterface.bulkDelete('usuario', null, {})
  }
  
};