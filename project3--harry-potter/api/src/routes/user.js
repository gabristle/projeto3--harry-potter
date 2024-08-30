import express from 'express'
import { userController } from '../controllers/User'

const router = express.Router()

router.get('/', userController.list)

router.post('/', userController.add)

router.delete('/:id', userController.delete)

export default router