import React from 'react'
import style from './style.module.css'

function Button({value}) {
  return (
    <>
        <button className={style.button}>{value}</button>
    </>
  )
}

export default Button