const { Router } = require('express')


const usuarioRoutes = require('./usuario.routes')
const adminRoutes = require('./admin.routes')


const routes = Router()


// Rotas dos controllers
routes.use('/usuario', usuarioRoutes)
routes.use('/admin', adminRoutes)



module.exports = routes