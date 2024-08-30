import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import style from './style.module.css'
import logo from '../../assets/logo.png'
import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext.jsx'

function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(email, senha)
  };

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
          <form onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
              <label htmlFor="email">Email</label>
              <Input type='email' placeholder={'Enter your email'} id={'email'} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="password">Password</label>
              <Input type={'password'} placeholder={'Enter your password'} id={'password'} onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <Button type={'submit'} value={'Sign In'}/>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn