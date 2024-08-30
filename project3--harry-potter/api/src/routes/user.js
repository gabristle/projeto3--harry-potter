import express from 'express'
import { userController } from '../controllers/User.js'

const router = express.Router()

router.get('/', userController.list)

router.post('/', userController.addUser)

router.post('/login', userController.login)

router.delete('/:id', userController.delete)

export default router