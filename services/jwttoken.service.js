const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const ClaimTypes = require('../config/claimtypes')

const GeneraToken = (email, nombre, rol) => {
    //Utilizamos los nombres de claims estandar
    const token = jwt.sign({
        [ClaimTypes.Name]: email, 
        [ClaimTypes.GivenName]: nombre,
        [ClaimTypes.Role]: rol,
        "iss": "ServidorFeiJWT",
        "aud": "ClienteFeiJWT",
    },
        jwtSecret, {
        expiresIn: '20m'
    })
    return token;
}

const TiempoRestanteToken = (req) => {
    try {
        const authHeader = req.header('Authorization')
        const token = authHeader.split(' ')[1]
        const decodedToken = jwt.verify(token, jwtSecret)

        //Regresa el tiempo restante en minutos
        const time = (decodedToken.exp - (new Date().getTime() / 1000))
        const minutos = Math.floor(time / 60)
        const segundos = Math.floor(time - minutos * 60)
        return "00" + minutos.toString().padStart(2, "0") + ':' + segundos.toString().padStart(2, "0")
    }catch(error){
        return null
    }
}

const GetEmail = (req) => {
    try{
        const authHeader = req.header('Authorization');
        const token = authHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, jwtSecret); 

        return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]; 
    }catch(error){
        return null; 
    }
}

module.exports = { GeneraToken, TiempoRestanteToken, GetEmail}