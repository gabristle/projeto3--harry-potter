import React from 'react'
import styles from './style.module.css'

function Input({type, placeholder, id, onChange, value}) {
  return (
    <>
      <input type={type} placeholder={placeholder} id={id} className={styles.input} onChange={onChange} value={value}/>
    </>
  )
}

export default Input