const { Router } = require('express')


const UsuarioController = require('../controllers/UsuarioController')


const usuarioRoutes = Router()


// Controller
const usuarioController = new UsuarioController()


// Rotas
usuarioRoutes.post('/create', usuarioController.create)
usuarioRoutes.get('/show', usuarioController.show)
usuarioRoutes.put('/update/:id', usuarioController.update)
usuarioRoutes.delete('/delete/:id', usuarioController.delete)
usuarioRoutes.post('/login', usuarioController.login)

// Exporta
module.exports = usuarioRoutes