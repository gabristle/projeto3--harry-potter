import React, { useState, useContext } from 'react';
import style from './style.module.css';
import Button from '../Button';
import Input from '../Input';
import { escapeHTML } from '../../utils/escapeHTML';
import AuthContext from '../../context/AuthContext';
import { CharacterContext } from '../../context/CharacterContext';

function Modal({ closeModal }) {
    const [character, setCharacter] = useState({
        name: '',
        species: '',
        gender: '',
        house: '',
        dateOfBirth: '',
        ancestry: '',
        eyeColor: '',
        hairColor: '',
    });
    
    const { isAuthenticated } = useContext(AuthContext);
    const { addCharacter, errorMessage } = useContext(CharacterContext);

    const handleCancel = () => {
        closeModal();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCharacter({ ...character, [id]: escapeHTML(value) });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            await addCharacter(character);
            closeModal();
        } else {
            alert('You must be logged in to add a character');
        }
    };

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContainer}>
                <form onSubmit={handleAdd}>
                    <h1>Add New Character</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input type='text' placeholder='Character name' id='name' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="species">Species</label>
                        <Input type='text' placeholder='Character species' id='species' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <Input type='text' placeholder='Character gender' id='gender' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="house">House</label>
                        <Input type='text' placeholder='Character house' id='house' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Input type='date' placeholder='Character date of birth' id='dateOfBirth' onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="ancestry">Ancestry</label>
                        <Input type='text' placeholder='Character ancestry' id='ancestry' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="eyeColor">Eye Color</label>
                        <Input type='text' placeholder='Character eye color' id='eyeColor' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    <div>
                        <label htmlFor="hairColor">Hair Color</label>
                        <Input type='text' placeholder='Character hair color' id='hairColor' onChange={handleChange} pattern='^[a-zA-Z\s]*$' title='Insert only letters and spaces' required />
                    </div>
                    {errorMessage && <p>{errorMessage}</p>}
                    <Button value='Cancel' onClick={handleCancel} />
                    <Button value='Add Character' type='submit' />
                </form>
            </div>
        </div>
    );
}

export default Modal;