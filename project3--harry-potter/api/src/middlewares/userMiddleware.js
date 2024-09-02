import { body } from 'express-validator'

export const userMiddleware = [
    body('email')
            .isEmail()
            .withMessage('Invalid email format'),
    body('senha')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long')
]