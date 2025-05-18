const router = require('express').Router()
const productos = require('../controllers/productos.controller')
const Authorize = require('../middlewares/auth.middleware')

router.get('/', Authorize('Usuario,Administrador'), productos.getAll)

router.get('/:id', Authorize('Usuario,Administrador'), productos.get)

router.post('/', Authorize('Administrador'), productos.productoValidator, productos.create)

router.put('/:id', Authorize('Administrador'), productos.productoValidator, productos.updateProduct)

router.delete('/:id', Authorize('Administrador'), productos.delete)

router.post('/:id/categoria', Authorize('Administrador'), productos.asignaCategoria)

router.delete('/:id/categoria/:categoriaid', Authorize('Administrador'), productos.eliminaCategoria);

module.exports = router