const jsonwebtoken = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY || require("../private-key");

function autenticarToken(request, response, next) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return response.status(401).json({ erro: 'Token não fornecido.' });
    }

    jsonwebtoken.verify(token, privateKey, (err, user) => {
        if (err) {
            return response.status(403).json({ erro: 'Token inválido.' });
        }
        request.user = user;
        next();
    });
}

module.exports = autenticarToken;
