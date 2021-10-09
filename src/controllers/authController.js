const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

//Importando o Model
const User = require('../models/user');

//Função para geração de token
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: '7d'
    })
}

exports.registerUser = async (req, res) => {

    const { email } = req.body
    try{
        if (await User.findOne({email})) {
            return res.status(400).json({error: true, message: "User already exists"})
        }

        const user = await User.create(req.body);

        //Remove password of response
        user.password = undefined;

        const token = generateToken({ id: user.id })

        return res.status(201).json({error: false, message: 'Successfully created'})
        
    } catch (err) {
        return res.status(400).json({error: true, message: err}) 
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    
    //buscando usuário + o campo que foi marcado como select false no model
    const user = await User.findOne({ email }).select('+password');
    
    //verificando se usuário existe
    if(!user){
        return res.status(400).send({error: true, message: 'User not found'})
    }
    
    //comparando a senha que está no banco com a senha digitada pelo usuário
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: true, message: 'Invalid credentials'})
    }
    
    //Retirando a senha para não ir como resposta
    user.password = undefined;
    
    //chamando a função para gerar o token
    const token = generateToken({ id: user.id })

    res.status(200).send({token, user})
}