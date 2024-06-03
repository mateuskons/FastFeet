const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EntregaController {
    async create(request, response) {
        try {
            const { endereco, entregue } = request.body

            const entrega = await prisma.entrega.create({
                data: {
                    endereco,
                    entregue
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
            const refeicoes = await prisma.entrega.findFirst({ where: { id } })

            response.json(refeicoes)

        }
        catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { endereco, entregue } = request.body
            const { id } = request.params

            const result = await prisma.entrega.update({
                where: {
                    id
                },
                data: {
                    endereco,
                    entregue
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