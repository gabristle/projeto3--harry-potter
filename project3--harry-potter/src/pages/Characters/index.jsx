import React from 'react'
import style from './style.module.css'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'

function Characters() {
  return (
    <div className={style.body}>
      <div className={style.mainContent}>
        <header>
          <img src={logo} alt="harry potter logo" className={style.logo}/>
        </header>
        <main>
          <div className={style.actionsContainer}>
            <Button value={'Add New Character'}/>
            <Input type={'text'} placeholder={'Search...'} id={'search'}/>
          </div>
          <div className={style.cardsContainer}>
            
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Characters