import express from 'express'
import { characterController } from '../controllers/Character.js'
import { validateCharacter } from '../middlewares/characterMiddleware.js'

const router = express.Router()

router.get('/search', characterController.search)

router.get('/', characterController.listAll)

router.post('/', validateCharacter, characterController.add)

export default router