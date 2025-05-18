const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Backend Node.js API',
        desciption: 'Esta es una API en node.js'
    },
    host: 'localhost:3000'
}

//Se genrará un nuevo archivo con la documentación
const outputFile = './swagger-output.json'
const routes = ['./index.js']

//se genera la doucumentación
swaggerAutogen(outputFile, routes, doc)