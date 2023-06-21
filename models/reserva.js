const { sequelize, DataTypes } = require('../db');

const reserva = sequelize.define('reserva', {
    titular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reservaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {

    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reserva'
});

// Crear tabla si no existe
reserva.sync();

module.exports = reserva;
