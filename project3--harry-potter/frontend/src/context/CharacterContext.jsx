import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [foundCharacters, setFoundCharacters] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch characters from the external API
                const apiResponse = await axios.get('https://potterhead-api.vercel.app/api/characters');
                const apiCharacters = apiResponse.data;

                // Fetch characters from the local database
                const dbResponse = await axios.get('http://localhost:3000/characters');
                const dbCharacters = dbResponse.data;

                // Combine characters from both sources
                const combinedCharacters = [...apiCharacters, ...dbCharacters];

                // Update state
                setAllCharacters(combinedCharacters);
                setFoundCharacters(combinedCharacters);
            } catch (error) {
                setErrorMessage('Error fetching data');
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const searchCharacter = (characterName) => {
        const trimmedName = characterName.trim();
        if (validateSearch(trimmedName)) {
            const filteredCharacters = allCharacters.filter(character =>
                character.name.toLowerCase().startsWith(trimmedName.toLowerCase())
            );
            setFoundCharacters(filteredCharacters);
        } else if (trimmedName.length === 0) {
            setFoundCharacters(allCharacters);
        }
    };

    const validateSearch = (toValidate) => {
        if (toValidate.length <= 2) {
            setErrorMessage('Write more than 2 characters');
            return false;
        } else if (toValidate.length === 0) {
            setErrorMessage('The input is empty, write at least 2 characters');
            return false;
        } else if (toValidate.length > 20) {
            setErrorMessage('Write less than 21 characters');
            return false;
        } else {
            setErrorMessage('');
        }
        return true;
    };

    const addCharacter = async (newCharacter) => {
        try {
            const response = await axios.post('http://localhost:3000/characters', newCharacter);
            const addedCharacter = response.data;

            setAllCharacters(prev => [...prev, addedCharacter]);
            setFoundCharacters(prev => [...prev, addedCharacter]);
        } catch (error) {
            setErrorMessage('Error adding character');
            console.error('Error adding character:', error);
        }
    };

    return (
        <CharacterContext.Provider value={{ foundCharacters, errorMessage, searchCharacter, addCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterProvider, CharacterContext };