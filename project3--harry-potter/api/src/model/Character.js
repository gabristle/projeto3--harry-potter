import { DataTypes } from 'sequelize';
import sequelize from '../bd/bdConnection.js'

const CharacterModel = sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    house: {
        type: DataTypes.STRING
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY
    },
    ancestry: {
        type: DataTypes.STRING
    },
    eyeColor: {
        type: DataTypes.STRING
    },
    hairColor: {
        type: DataTypes.STRING
    }
});

export default CharacterModel;