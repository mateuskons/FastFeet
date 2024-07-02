const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DestinatarioController {

    async create(request, response) {
        try {
            const { nome, telefone, rua, numero, complemento, cep} = request.body

            const destinatario = await prisma.destinatario.create({
                data: {
                    nome,
                    telefone,
                    rua,
                    numero,
                    complemento,
                    cep
                },
            })

            response.json(destinatario)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }


    async show(request, response) {
        try {
            const { id } = request.params
            const destinatarios = await prisma.destinatario.findFirst({id});

            response.json(destinatarios)

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async showDestinatarios(request, response) {
        try {
            
            const destinatarios = await prisma.destinatario.findMany();

            response.json(destinatarios)

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {

            const { nome, telefone, rua, numero, cep, complemento } = request.body
            const { id } = request.params

            const result = await prisma.destinatario.update({
                where: {
                    id: id,
                },
                data: {
                    nome: nome,
                    telefone: telefone,
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    cep: cep
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


            const deleteDestinatario = await prisma.destinatario.delete({
                where: {
                    id: id,
                },
            })

            return response.status(200).send()

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }

}

module.exports = DestinatarioController