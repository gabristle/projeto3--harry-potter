import express from 'express'
import { characterController } from '../controllers/Character.js'
import { characterMiddleware } from '../middlewares/characterMiddleware.js'

const router = express.Router()

router.get('/search', characterController.search)

router.get('/', characterController.listAll)

router.post('/', characterMiddleware, characterController.add)

export default router