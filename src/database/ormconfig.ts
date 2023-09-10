import{DataSource} from "typeorm"
import dotenv from "dotenv"

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './src/database/database.sqlite',
    entities: [
      join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true,
    synchronize: true
  })

dataBase.initialize()
.then(() => {
    console.log('Banco conectado com sucesso!')
})
.catch((erro) => {
    console.log('Erro ao conectar o banco',erro)
})
export default dataBase