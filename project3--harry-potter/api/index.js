import express from 'express'
import bodyParser from 'body-parser'
import router from './src/routes/user.js'
import sequelize from './src/model/User.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use('/user', router)

const PORT = 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});