const { Router } = require('express')


const EntregaController = require('../controllers/EntregaController')


const entregaRoutes = Router()


// Controller
const entregaController = new EntregaController()


// Rotas
entregaRoutes.post('/create', entregaController.create)
entregaRoutes.get('/showEntrega/:id', entregaController.showEntrega)
entregaRoutes.get('/show/:usuarioId', entregaController.show)
entregaRoutes.put('/update/:id', entregaController.update)//entregador
entregaRoutes.delete('/delete/:id', entregaController.delete)

// Exporta
module.exports = entregaRoutes