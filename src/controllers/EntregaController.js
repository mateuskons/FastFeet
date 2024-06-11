const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EntregaController {
    async create(request, response) {
        try {
            const { endereco, entregue, devolvida, destinatarioId, usuarioId } = request.body

            const entrega = await prisma.entrega.create({
                data: {
                    endereco,
                    entregue,
                    devolvida,
                    destinatarioId,
                    usuarioId,
                },
            })


            response.json(entrega)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async showEntrega(request, response) {
        try {
            const { id } = request.params
            const entregas = await prisma.entrega.findFirst({ where: { id } })

            response.json(entregas)

        }
        catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { endereco, entregue, devolvida, destinatarioId, usuarioId } = request.body
            const { id } = request.params

            const result = await prisma.entrega.update({
                where: {
                    id
                },
                data: {
                    endereco,
                    entregue,
                    devolvida,
                    destinatarioId,
                    usuarioId
                },
            });

            return response.status(200).send()

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }

    async delete(request, response) {

        try {
            const { id } = request.params
            console.log(`id: ${id}`)


            await prisma.entrega.delete({
                where: {
                    id,
                },
            })

            return response.status(200).send()

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }

}

module.exports = EntregaController