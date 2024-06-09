const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const privateKey = require("../private-key")

class AdminController {

    async create(request, response) {
        try {
            const { nome, cpf, senha } = request.body
            let hashSenha = bcrypt.hashSync(senha, 10)


            const admin = await prisma.admin.create({
                data: {
                    nome,
                    cpf,
                    senha: hashSenha
                },
            })

            response.json(admin)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }


    async show(request, response) {
        try {
            const admins = await prisma.admin.findMany();

            response.json(admins)

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {

            const { nome, cpf, senha } = request.body
            let hashSenha = bcrypt.hashSync(senha, 10)
            const { id } = request.params

            const result = await prisma.admin.update({
                where: {
                    id: id,
                },
                data: {
                    nome: nome,
                    cpf: cpf,
                    senha: hashSenha
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


            const deleteadmin = await prisma.admin.delete({
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

    async login(request, response) {
        try {
            const { cpf, senha } = request.body
            const admin = await prisma.admin.findFirst({ where: { cpf }})
            const senhaValida = bcrypt.compareSync(senha, admin.senha)
            delete(admin.senha)  
            if(senhaValida){
                const token = jsonwebtoken.sign(
                    { 
                        adminId: admin.id,
                        cpf: admin.cpf,
                    },
                    privateKey,
                    { expiresIn: '60m' }
                )
                return response.json({data: {admin, token}})
            }
            return response.status(400).send()
            
            
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }
}

module.exports = AdminController
