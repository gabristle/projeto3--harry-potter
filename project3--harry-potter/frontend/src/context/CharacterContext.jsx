import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)
    const [allCharacters, setAllCharacters] = useState([])
    const [foundCharacters, setFoundCharacters] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbResponse = await axios.get('http://localhost:3000/characters')
                const dbCharacters = dbResponse.data
                setAllCharacters(dbCharacters)
                setFoundCharacters(dbCharacters)
            } catch (error) {
                setErrorMessage('Error fetching data')
                console.error('Error fetching data:', error)
            }
        };

        fetchData();
    }, []);

    const searchCharacters = async (name) => {
        if (!isAuthenticated) {
            setErrorMessage('You must be logged in to search for characters');
            return;
        }
    
        if (name.trim() === '') {
            setFoundCharacters(allCharacters)
            setErrorMessage('');
            return;
        }
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:3000/characters/${name}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const characters = response.data;
            if (characters.length === 0) {
                setErrorMessage('No characters found');
            } else {
                setErrorMessage('');
            }
            setFoundCharacters(characters);
        } catch (error) {
            console.error('Error searching for characters:', error);
            setErrorMessage('Error searching for characters');
            setFoundCharacters([]);
        }
    };

    const addCharacter = async (newCharacter) => {
        if (!isAuthenticated) {
            setErrorMessage('You must be logged in to add a character');
            return;
        }
        
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/characters', newCharacter, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const addedCharacter = response.data;
            setAllCharacters(prev => [...prev, addedCharacter]);
            setFoundCharacters(prev => [...prev, addedCharacter]);
        } catch (error) {
            setErrorMessage('Error adding character');
            console.error('Error adding character:', error);
        }
    };

    return (
        <CharacterContext.Provider value={{ foundCharacters, errorMessage, addCharacter, searchCharacters }}>
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterProvider, CharacterContext };