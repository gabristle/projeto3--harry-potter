import React from 'react'
import styles from './style.module.css'

function Input({type, placeholder, id, onChange, value, pattern, title}) {
  return (
    <>
      <input type={type} placeholder={placeholder} id={id} className={styles.input} onChange={onChange} value={value} pattern={pattern} title={title} required/>
    </>
  )
}

export default Input