const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const privateKey = require("../private-key")


class UsuarioController {


    async create(request, response) {
        try {
            const { nome, cpf, telefone, senha } = request.body
            let hashSenha = bcrypt.hashSync(senha, 10)


            const usuario = await prisma.usuario.create({
                data: {
                    nome,
                    cpf,
                    telefone,
                    senha: hashSenha
                },
            })


            response.json(usuario)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async show(request, response) {
        try {
            const usuarios = await prisma.usuario.findMany();

            response.json(usuarios)

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {

            const { nome, cpf } = request.body
            const { id } = request.params

            const result = await prisma.usuario.update({
                where: {
                    id: id,
                },
                data: {
                    nome: nome,
                    cpf: cpf,
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


            const deleteusuario = await prisma.usuario.delete({
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
            const usuario = await prisma.usuario.findFirst({ where: { cpf }})
            const senhaValida = bcrypt.compareSync(senha, usuario.senha)
            delete(usuario.senha)  
            if(senhaValida){
                const token = jsonwebtoken.sign(
                    { 
                        usuarioId: usuario.id,
                        cpf: usuario.cpf,
                    },
                    privateKey,
                    { expiresIn: '60m' }
                )
                return response.json({data: {usuario, token}})
            }
            return response.status(400).send()
            
            
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }
}

module.exports = UsuarioController