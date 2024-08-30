import express from 'express'
import { characterController } from '../controllers/Character.js'
import { validateCharacter } from '../middlewares/characterMiddleware.js'

const router = express.Router()

router.get('/characters', characterController.search)
router.post('/characters', validateCharacter, characterController.add)

export default router