const { Router } = require('express')


const EntregaController = require('../controllers/EntregaController')


const entregaRoutes = Router()


// Controller
const entregaController = new EntregaController()


// Rotas
entregaRoutes.post('/create', entregaController.create)
entregaRoutes.get('/showEntrega/:id', entregaController.showEntrega)
entregaRoutes.put('/update/:id', entregaController.update)
entregaRoutes.delete('/delete/:id', entregaController.delete)

// Exporta
module.exports = entregaRoutes