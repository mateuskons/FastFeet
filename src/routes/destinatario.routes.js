const { Router } = require('express')

const DestinatarioController = require('../controllers/DestinatarioController')

const destinatarioRoutes = Router()

// Controller
const destinatarioController = new DestinatarioController()

// Rotas
destinatarioRoutes.post('/create', destinatarioController.create)
destinatarioRoutes.get('/show/:id', destinatarioController.show)
destinatarioRoutes.put('/update/:id', destinatarioController.update)
destinatarioRoutes.delete('/delete/:id', destinatarioController.delete)

// Exporta
module.exports = destinatarioRoutes