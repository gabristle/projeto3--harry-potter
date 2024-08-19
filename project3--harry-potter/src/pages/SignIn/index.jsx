import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

function SignIn() {
  return (
    <div>
      <Input type={'text'} placeholder={'Enter your email'} id={'email'}/>
      <Button value={'Login'}/>
    </div>
  )
}

export default SignIn