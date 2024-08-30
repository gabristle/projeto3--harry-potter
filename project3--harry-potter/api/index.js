import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './src/routes/user.js'
import sequelize from './src/bd/bdConnection.js'
import dotenv from 'dotenv'
import cors from 'cors'
import characterRouter from './src/routes/character.js'

dotenv.config()

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/characters', characterRouter)

const PORT = 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`)
  })
}).catch(error => {
  console.error('Unable to connect to the database:', error)
})