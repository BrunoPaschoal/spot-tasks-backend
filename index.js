require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')

//Config padrão
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

//Instanciando conexão com banco
require('./src/database/database');

//Importando as rotas
app.use('/auth', require('./src/routes/auth.routes'));
app.use('/task', require('./src/routes/task.routes'));
app.use('/project', require('./src/routes/project.routes'));

app.listen(8000, () => {
    console.log("Sever is runing");
})