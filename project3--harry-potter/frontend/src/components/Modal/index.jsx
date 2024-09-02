import React from 'react'
import style from './style.module.css'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { escapeHTML } from '../../utils/escapeHTML'

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
    setCharacter({ ...character, [id]: escapeHTML(value)});
  };

  const handleAdd = (e) => {
    e.preventDefault()
    addCharacter(character)
    closeModal()
  }

  return (
    <div className={style.modalBackground}>
        <div className={style.modalContainer}>
            <form onSubmit={handleAdd}>
                <h1>Add New Character</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input type='text' placeholder='Character name' id='name' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="species">Specie</label>
                    <Input type='text' placeholder='Character species' id='species' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <Input type='text' placeholder='Character gender' id='gender' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="house">House</label>
                    <Input type='text' placeholder='Character house' id='house' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Input type='date' placeholder='Character date of birth' id='dateOfBirth' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="ancestry">Ancestry</label>
                    <Input type='text' placeholder='Character ancestry' id='ancestry' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="eyeColor">Eye</label>
                    <Input type='text' placeholder='Character eye' id='eyeColor' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <div>
                    <label htmlFor="hairColor">Hair</label>
                    <Input type='text' placeholder='Character hair' id='hairColor' onChange={handleChange} pattern={'^[a-zA-Z\s]*$'} title={'Insert only letters and spaces'} required/>
                </div>
                <Button value='Cancel' onClick={handleCancel}/>
                <Button value='Add Character' type={'submit'}/>
            </form>
        </div>
    </div>
  )
}

export default Modal