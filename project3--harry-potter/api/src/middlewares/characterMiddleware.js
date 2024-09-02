import { body } from 'express-validator'

export const characterMiddleware = [
    body('name')
        .trim().escape()
        .isString().withMessage('Name must be a string')
        .notEmpty().withMessage('Name is required'),

    body('species')
        .trim().escape()
        .isString().withMessage('Species must be a string')
        .notEmpty().withMessage('Name is required'),

    body('gender')
        .trim().escape()
        .isString().withMessage('Gender must be a string')
        .notEmpty().withMessage('Name is required'),

    body('house')
        .trim().escape()
        .isString().withMessage('House must be a string')
        .notEmpty().withMessage('Name is required'),

    body('dateOfBirth')
        .isISO8601()
        .notEmpty(),

    body('ancestry')
        .trim().escape()
        .isString().withMessage('Ancestry must be a string')
        .notEmpty().withMessage('Name is required'),

    body('eyeColor')
        .trim().escape()
        .isString().withMessage('Eye color must be a string')
        .notEmpty().withMessage('Name is required'),

    body('hairColor')
        .trim().escape()
        .isString().withMessage('Hair color must be a string')
        .notEmpty().withMessage('Name is required'),
]