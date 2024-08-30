import {Sequelize, DataTypes} from 'sequelize'
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default UserModel