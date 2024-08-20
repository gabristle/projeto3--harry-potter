import React from 'react'
import Footer from '../../components/Footer'
import style from './style.module.css'
import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className={style.body}>
      <div className={style.mainContent}>
        <header>
          <img src={logo} alt="harry potter logo" className={style.logo}/>
        </header>
        <main>
          <h1>Error 404 - Page not found</h1>
          <Button value={'Back To Home'} onClick={handleClick}/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Error