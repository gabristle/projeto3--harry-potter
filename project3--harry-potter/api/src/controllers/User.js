import User from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'

export const userController = {
    async list(req, res) {
        try{
            const users = await User.findAll()
            res.status(200).json(users)
        }catch(error){
            console.error(error)
        }
    },

    async login(req, res) {
        try {
            await body('email').isEmail().withMessage('Invalid email format').run(req)
            await body('senha').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').run(req)

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }

            const { email, senha } = req.body
            const user = await User.findOne({ where: { email } })

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password!' })
            }

            const isPasswordValid = await bcrypt.compare(senha, user.senha)
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password!' })
            }

            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            )
            res.status(200).json({ message: 'Login successful!', token })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error during login' })
        }
    },

    async addUser(req, res) {
        try {
            await body('email').isEmail().withMessage('Invalid email format').run(req)
            await body('senha').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').run(req)

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }

            const { email, senha } = req.body;
            const existingUser = await User.findOne({ where: { email } })

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists.' })
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(senha, salt)

            const user = await User.create({ email, senha: hashedPassword })
            res.status(201).json({ message: 'User created successfully.', user })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error during user creation' })
        }
    },

    async delete(req, res) {
        try{
            const userId = req.params.id
            const userDeleted = await User.destroy(userId)
            if(userDeleted){
                res.status(400).json({message: 'User not found!'})
            }
            res.status(200).json({message: 'User deleted with success!'})
        }catch(error){
            console.error(error)
        }
    }
}