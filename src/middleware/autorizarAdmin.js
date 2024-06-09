const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function autorizarAdmin(request, response, next) {
    const { adminId } = request.admin;

    const admin = await prisma.admin.findUnique({
        where: { id: adminId }
    });

    if (!admin) {
        return response.status(403).json({ erro: 'Acesso negado.' });
    }

    next();
}

module.exports = autorizarAdmin;
