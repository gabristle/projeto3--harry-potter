import React from 'react'
import style from './style.module.css'
import Button from '../Button'
import Input from '../Input'

function Modal({closeModal}) {
  const handleCancel = () => {
    closeModal()
  }

  const handleAdd = () => {
    closeModal()
  }

  return (
    <div className={style.modalBackground}>
        <div className={style.modalContainer}>
            <h1>Add New Character</h1>
            <div>
                <label htmlFor="name">Name</label>
                <Input type='text' placeholder='Character name' id='name'/>
            </div>
            <div>
                <label htmlFor="species">Specie</label>
                <Input type='text' placeholder='Character species' id='species'/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <Input type='text' placeholder='Character gender' id='gender'/>
            </div>
            <div>
                <label htmlFor="house">House</label>
                <Input type='text' placeholder='Character house' id='house'/>
            </div>
            <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <Input type='date' placeholder='Character date of birth' id='date of birth'/>
            </div>
            <div>
                <label htmlFor="ancestry">Ancestry</label>
                <Input type='text' placeholder='Character ancestry' id='ancestry'/>
            </div>
            <div>
                <label htmlFor="eye">Eye</label>
                <Input type='text' placeholder='Character eye' id='eye'/>
            </div>
            <div>
                <label htmlFor="hair">Hair</label>
                <Input type='text' placeholder='Character hair' id='hair'/>
            </div>
            <Button value='Cancel' onClick={handleCancel}/>
            <Button value='Add Character' onclick={handleAdd}/>
        </div>
    </div>
  )
}

export default Modal