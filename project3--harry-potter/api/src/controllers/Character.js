import CharacterModel from '../model/Character.js'
import { validationResult } from 'express-validator'

export const characterController = {
    async listAll(req, res) {
        try{
            const characters = await CharacterModel.findAll()
            res.status(200).json(characters)
        }catch(error){
            res.status(400).json({message: 'Server error during character list'})
        }
    },

    async search(req, res) {
        try {
            const { name } = req.query
            let characters
            if (name) {
                characters = await CharacterModel.findAll({
                    where: {
                        name: {
                            [Sequelize.Op.like]: `%${name}%`
                        }
                    }
                })
            } else {
                characters = await CharacterModel.findAll()
            }
            res.json(characters)
        } catch (error) {
            res.status(400).json({ message: 'Server error during character search' })
        }
    },

    async add(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const character = req.body
            const newCharacter = await CharacterModel.create(character)
            res.status(201).json(newCharacter)
        } catch (error) {
            res.status(400).json({ message: 'Server error during character add' })
        }
    }
}