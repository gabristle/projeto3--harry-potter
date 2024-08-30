import React from 'react'
import style from './style.module.css'

function Button({value, onClick}) {
  return (
    <>
      <button className={style.button} onClick={onClick}>{value}</button>
    </>
  )
}

export default Button