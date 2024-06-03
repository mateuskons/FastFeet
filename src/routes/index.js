const { Router } = require('express')


const usuarioRoutes = require('./usuario.routes')
const adminRoutes = require('./admin.routes')
const entregaRoutes = require('./entrega.routes')
const destinatarioRoutes = require('./destinatario.routes')

const routes = Router()


// Rotas dos controllers
routes.use('/usuario', usuarioRoutes)
routes.use('/admin', adminRoutes)
routes.use('/entrega', entregaRoutes)
routes.use('/destinatario', destinatarioRoutes)

module.exports = routes