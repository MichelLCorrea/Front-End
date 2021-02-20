//npm init -f
// npm install express body-parser --save

const express = require('express')
const bodyParser = require('body-parser')

const PORTA = process.env.PORTA || 4000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.listen(PORTA,() => console.log(`Servidor rodando \n http://localhost:${PORTA}`))
