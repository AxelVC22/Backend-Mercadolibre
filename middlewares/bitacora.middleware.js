const requestIp = require('request-ip');
const ClaimTypes = require('../config/claimtypes')
const { bitacora } = require('../models')

const bitacoralogger = (req, res, next) => {
    //Obtiene la Ip de la petición
    const ip = requestIp.getClientIp(req)
    let email = 'invitado'

    req.bitacora = async (accion, id) => {
        if ( req.decodedToken ){
            //Obtiene el email de usuario
            email = req.decodedToken[ClaimTypes.Name];
        }

        //Guarda la operación
        await bitacora.create({
            accion: accion, elementoid: id, ip: ip, usuario: email, fecha: new Date()
        })
    }

    next()
}

module.exports = bitacoralogger