import CharacterModel from '../model/Character.js'
import { validationResult } from 'express-validator'
import { Op } from 'sequelize'

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
        const name = req.params.name;
        try {
            const characters = await CharacterModel.findAll({ where: { name: { [Op.like]: `%${name}%`} } });
    
            if (characters.length > 0) {
                res.status(200).json(characters);
            } else {
                res.status(404).json({ message: 'Characters not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred', error: error.message });
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