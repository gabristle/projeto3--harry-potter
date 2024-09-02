import express from 'express'
import { characterController } from '../controllers/Character.js'
import { characterMiddleware } from '../middlewares/characterMiddleware.js'
import { authenticateToken } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', characterController.listAll)

router.get('/:name', authenticateToken, characterController.search)

router.post('/', authenticateToken, characterMiddleware, characterController.add)

export default router