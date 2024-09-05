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
import fs from 'fs'
import https from 'https'
import rateLimit from 'express-rate-limit'

const key = fs.readFileSync('./certificate/key.pem', 'utf8')
const certificate = fs.readFileSync('./certificate/cert.pem', 'utf8')
const credentials = {key: key, cert: certificate}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'You have reached the requisition limit, try again later!',
  headers: true
});

const app = express()
dotenv.config()
app.use(limiter);

app.use(compression())
app.use(requestLogger)

app.use(cors());
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/characters', characterRouter)

app.use(errorHandler)

const PORT = 3000

const httpsServer = https.createServer(credentials, app)

sequelize.sync().then(() => {
  httpsServer.listen(PORT, () => {
      console.info(`Server running on https://localhost:${PORT}, Logs:   `)
  })
}).catch(error => {
  console.error('Unable to connect to the database:', error)
})