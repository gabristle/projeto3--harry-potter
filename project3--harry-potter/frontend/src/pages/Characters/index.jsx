import React from 'react'
import { useState, useContext } from 'react'
import style from './style.module.css'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import { CharacterContext } from '../../context/CharacterContext'
import AuthContext from '../../context/AuthContext.jsx'

function Characters() {
  const { foundCharacters, searchCharacter, errorMessage, addCharacter } = useContext(CharacterContext)
  const { logout } = useContext(AuthContext)
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(e.target.value)
    searchCharacter(e.target.value)
  }
  
  const handleLogout = () => {
    logout();
  }

  return (
    <div className={style.body}>
      <div className={style.mainContent}>
        <header>
          <img src={logo} alt="harry potter logo" className={style.logo}/>
        </header>
        <main>
          <div className={style.actionsContainer}>
            <Button value={'Add New Character'} onClick={openModal}/>
            <div className={style.inputColumn}>
              <Input type={'text'} placeholder={'Search...'} id={'search'} onChange={handleChange} value={search}/>
              <p className={style.errorMessage}>{errorMessage}</p>
            </div>
          </div>
          <div className={style.cardsContainer}>
            {Array.isArray(foundCharacters) && foundCharacters.map(character => (
                <Card key={character.id} name={character.name} race={character.race} specie={character.species} gender={character.gender} house={character.house} dateOfBirth={character.dateOfBirth} ancestry={character.ancestry} eye={character.eyeColour} hair={character.hairColour} image={character.image}></Card>
            ))}  
          </div>
          {modalOpen && <Modal closeModal={closeModal} addCharacter={addCharacter}/>}
        </main>
      </div>
      <Button value={'Logout'} onClick={handleLogout}></Button>
      <Footer />
    </div>
  )
}

export default Characters