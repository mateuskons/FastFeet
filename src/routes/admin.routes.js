const { Router } = require('express')

const AdminController = require('../controllers/AdminController')

const adminRoutes = Router()

// Controller
const adminController = new AdminController()

// Rotas
adminRoutes.post('/create', adminController.create)
adminRoutes.get('/show', adminController.show)
adminRoutes.put('/update/:id', adminController.update)
adminRoutes.delete('/delete/:id', adminController.delete)
adminRoutes.post('/login', adminController.login)

// Exporta
module.exports = adminRoutes