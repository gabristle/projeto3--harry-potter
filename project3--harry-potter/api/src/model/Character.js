import { DataTypes } from 'sequelize';
import sequelize from '../bd/bdConnection.js'

const CharacterModel = sequelize.define('Character', {
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
        type: DataTypes.DATE
    },
    ancestry: {
        type: DataTypes.STRING
    },
    eye: {
        type: DataTypes.STRING
    },
    hair: {
        type: DataTypes.STRING
    }
});

export default CharacterModel;