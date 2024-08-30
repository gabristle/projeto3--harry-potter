import { body } from 'express-validator'

export const validateCharacter = [
    body('name')
        .isString().withMessage('Name must be a string')
        .notEmpty().withMessage('Name is required'),

    body('species')
        .optional()
        .isString().withMessage('Species must be a string'),

    body('gender')
        .optional()
        .isString().withMessage('Gender must be a string'),

    body('house')
        .optional()
        .isString().withMessage('House must be a string'),

    body('dateOfBirth')
        .optional()
        .isISO8601().withMessage('Date of Birth must be a valid ISO8601 date'),

    body('ancestry')
        .optional()
        .isString().withMessage('Ancestry must be a string'),

    body('eye')
        .optional()
        .isString().withMessage('Eye color must be a string'),

    body('hair')
        .optional()
        .isString().withMessage('Hair color must be a string')
]