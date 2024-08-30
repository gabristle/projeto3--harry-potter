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
        .isISO8601().withMessage('Date of Birth must be a valid date'),

    body('ancestry')
        .optional()
        .isString().withMessage('Ancestry must be a string'),

    body('eyeColor')
        .optional()
        .isString().withMessage('Eye color must be a string'),

    body('hairColor')
        .optional()
        .isString().withMessage('Hair color must be a string'),
]