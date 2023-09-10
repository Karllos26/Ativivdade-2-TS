import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'

import routes from './routes'

import cors from 'cors'


dotenv.config()
const app = express()
const port = process.env.PORT || 3000
/*
app.get('/',(req,res) => {
    console.log(req)
    res.send('Olá mundo!')
})
app.get('/user',(req,res) => {
res.send({id:1,name:"teste"})
})
*/

app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas
app.use(cors()) // habilita o CORS


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log('Banco de dados', 
    dataBase.isInitialized ? 'inciado' : 'não iniciado')
})
app.use(cors({
    origin: ['http://localhost:3000', 'https://meuapp.com']
  }))