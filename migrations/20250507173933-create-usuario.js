'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuario', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            passwordhash: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            protegido: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            rolid: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'rol',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
        await queryInterface.dropTable('usuario');
    }
};