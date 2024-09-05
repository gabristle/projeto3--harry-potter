import React, { useState, useContext } from 'react';
import style from './style.module.css';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { CharacterContext } from '../../context/CharacterContext';
import AuthContext from '../../context/AuthContext.jsx';
import characterIcon from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';

function Characters() {
  const { foundCharacters, errorMessage, addCharacter, searchCharacters } = useContext(CharacterContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchError, setSearchError] = useState('');
  const navigate = useNavigate()

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    if (isAuthenticated) {
      searchCharacters(DOMPurify.sanitize(search));
      setSearchError('');
    } else {
      setSearchError(alert('You must be logged in to search for characters.'));
    }
  };

  const handleLogout = () => {
    logout()
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className={style.body}>
      <div className={style.mainContent}>
        <header>
          <img src={logo} alt="harry potter logo" className={style.logo} />
        </header>
        <main>
          <div className={style.actionsContainer}>
            <Button value='Add New Character' onClick={openModal} />
            <div className={style.inputColumn}>
              <div className={style.inputRow}>
                <Input 
                  type='text' 
                  placeholder='Search...' 
                  id='search' 
                  onChange={(e) => setSearch(e.target.value)} 
                  value={search} 
                  disabled={!isAuthenticated}
                />
                <Button 
                  value='Search' 
                  onClick={handleSearch} 
                  disabled={!isAuthenticated}
                />
              </div>
              {searchError && <p className={style.errorMessage}>{searchError}</p>}
              {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
            </div>
          </div>
          <div className={style.cardsContainer}>
            {foundCharacters && foundCharacters.length > 0 ? (
              foundCharacters.map(character => (
                <Card 
                  key={character.id} 
                  name={character.name} 
                  race={character.race} 
                  specie={character.species} 
                  gender={character.gender} 
                  house={character.house} 
                  dateOfBirth={character.dateOfBirth} 
                  ancestry={character.ancestry} 
                  eyeColor={character.eyeColor} 
                  hairColor={character.hairColor} 
                  image={characterIcon} 
                />
              ))
            ) : (
              <p>No characters found.</p>
            )}
          </div>
          {modalOpen && <Modal closeModal={closeModal} addCharacter={addCharacter} />}
        </main>
      </div>
      <div className={style.logoutButton}>
        {isAuthenticated ? <Button value='Logout' onClick={handleLogout}></Button> : <Button value='Login' onClick={handleLogin} />}
      </div>
      <Footer />
    </div>
  );
}

export default Characters;