import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './src/routes/user.js'
import sequelize from './src/bd/bdConnection.js'
import dotenv from 'dotenv'
import cors from 'cors'
import characterRouter from './src/routes/character.js'
import compression from 'compression'
import errorHandler from './src/middlewares/errorHandler.js'
import requestLogger from './src/middlewares/logMiddleware.js'

dotenv.config()

const app = express()

app.use(compression())
app.use(requestLogger)

app.use(cors());
app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/characters', characterRouter)
app.use(errorHandler)

const PORT = 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}, Logs:   `)
  })
}).catch(error => {
  console.error('Unable to connect to the database:', error)
})