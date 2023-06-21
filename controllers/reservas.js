const ctrlreserva = {};
const reserva = require('../models/reserva');
const reserva = require('../models/reserva');
const reserva = require('../models/reserva');
const reservas = require('../models/reserva');

// Ctrl para obtener todas las reservas
ctrlreserva.obtenerReserva = async (req, res) => {
    try {
        const reservas = await reserva.findAll({
            where: {
                estado: true,
                usuarioId: req.reserva.id
            }
        });

        if (!reserva || reserva.length === 0) {
            throw ({
                status: 404,
                message: 'No hay reservas registradas'
            })
        }

        return res.json(reserva);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}

// Ctrl para obtener una reserva
ctrlreserva.obtenerReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await reserva.findOne({
            where: {
                id,
                estado: true
            }
        });

        if (!reserva) {
            throw ({
                status: 404,
                message: 'No existe la reserva'
            })
        }
    
        return res.json(reserva);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para crear una reserva
ctrlTarea.crearTarea = async (req, res) => {
    const { titular, descripcion, fechaReserva } = req.body;

    try {
        const reserva = await reserva.create({
            titular,
            descripcion,
            reservaId: req.reserva.id
        });

        if (!reserva) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para actualizar una reserva
ctrlTarea.actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { titular, descripcion } = req.body;
    
    try {
        const reservaActualizada = await reserva.update({
            titular,
            descripcion,
            fechaReserva
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para eliminar una reserva
ctrlreserva.eliminarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaEliminada = await reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({reservaEliminada, message: 'Reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}




module.exports = ctrlreserva;