import express from 'express'
import { userController } from '../controllers/User.js'
import { userMiddleware } from '../middlewares/userMiddleware.js'

const router = express.Router()

router.get('/', userController.list)

router.post('/', userMiddleware, userController.addUser)

router.post('/login', userMiddleware, userController.login)

router.delete('/:id', userController.delete)
export default router