import React from 'react'
import style from './style.module.css'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'

function Modal({closeModal, addCharacter}) {
    const [character, setCharacter] = useState({
        name: '',
        species: '',
        gender: '',
        house: '',
        dateOfBirth: '',
        ancestry: '',
        eyeColor: '',
        hairColor: '',
    })

  const handleCancel = () => {
    closeModal()
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCharacter({ ...character, [id]: value });
  };

  const handleAdd = () => {
    addCharacter(character)
    closeModal()
  }

  return (
    <div className={style.modalBackground}>
        <div className={style.modalContainer}>
            <h1>Add New Character</h1>
            <div>
                <label htmlFor="name">Name</label>
                <Input type='text' placeholder='Character name' id='name' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="species">Specie</label>
                <Input type='text' placeholder='Character species' id='species' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <Input type='text' placeholder='Character gender' id='gender' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="house">House</label>
                <Input type='text' placeholder='Character house' id='house' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <Input type='date' placeholder='Character date of birth' id='dateOfBirth' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="ancestry">Ancestry</label>
                <Input type='text' placeholder='Character ancestry' id='ancestry' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="eyeColor">Eye</label>
                <Input type='text' placeholder='Character eye' id='eyeColor' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="hairColor">Hair</label>
                <Input type='text' placeholder='Character hair' id='hairColor' onChange={handleChange}/>
            </div>
            <Button value='Cancel' onClick={handleCancel}/>
            <Button value='Add Character' onClick={handleAdd}/>
        </div>
    </div>
  )
}

export default Modal