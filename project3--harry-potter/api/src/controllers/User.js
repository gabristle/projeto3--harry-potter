import User from '../model/User'

export default User = {
    async list(req, res) {
        try{
            const users = await User.findAll()
            res.status(200).json(users)
        }catch(error){
            console.error(error)
        }
    },

    async addUser(req, res) {
        try{
            const {email, senha} = req.body
            const user = await User.create({email, senha});
            res.status(200).json(user)
        }catch(error){
            console.error(error)
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
};