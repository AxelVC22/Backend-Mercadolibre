'use strict';
/**
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('archivo', {
            id: {
                allowNull: false,
                autoIncrement: true,  // Fixed typo: autofncrement → autoIncrement
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            mime: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            size: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            indb: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            datos: {
                type: Sequelize.BLOB('long'),  // Fixed: changed parentheses to single quotes
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('archivo');  // Changed 'archive' to 'archivo' for consistency
    }
};