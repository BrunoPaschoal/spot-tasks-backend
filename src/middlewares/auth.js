const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //Se o token não foi enviado
    if(!authHeader){
        return res.status(401).send({error: true, message: "No token provided"});
    }

    //Verifica se o token está em um formato certo
    const parts = authHeader.split(' ')

    if (!parts.length === 2){
        return res.status(401).send({error: true, message: "Token error"});        
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: true, message: "Token malformatted"});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: true, message: "invalid Token"});

        req.userId = decoded.id;
        return next()
    } )
}