const { Router } = require('express')


const usuarioRoutes = require('./usuario.routes')


const routes = Router()


// Rotas dos controllers
routes.use('/usuario', usuarioRoutes)



module.exports = routes