import React from 'react'
import styles from './style.module.css'

function Input({type, placeholder, id}) {
  return (
    <>
        <input type={type} placeholder={placeholder} id={id} className={styles.input}/>
    </>
  )
}

export default Input