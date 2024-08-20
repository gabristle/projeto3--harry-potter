import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import style from './style.module.css'
import logo from '../../assets/logo.png'

function SignIn() {
  return (
    <div className={style.body}>
      <div className={style.mainContent}>
        <header>
          <img src={logo} alt="harry potter logo" className={style.logo}/>
        </header>
        <main>
          <div className={style.inputs}>
            <h1>Sign In</h1>
            <p>Enter your credentials to Sign In</p>
          </div>
          <div>
            <div className={style.inputContainer}>
              <label htmlFor="email">Email</label>
              <Input type='email' placeholder={'Enter your email'} id={'email'}/>
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="password">Password</label>
              <Input type={'password'} placeholder={'Enter your password'} id={'password'}/>
            </div>
            <Button value={'Sign In'}/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn