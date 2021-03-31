const express = require('express')
const bodyParser = require('body-parser')

const PORT = 4000

//Criar um novo servidor web
const app = express()

//Configurar o servidor web
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public')) //Define a pasta dos arquivos estáticos
app.listen(PORT, () => console.log('Servidor rodando... http://localhost:4000'))