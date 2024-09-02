import React from 'react'
import style from './style.module.css'

function Card({name, specie, gender, house, dateOfBirth, ancestry, eyeColor, hairColor, image}) {
  return (
    <div className={style.cardContainer}>
        <h2 className={style.title}>{name}</h2>
        <div className={style.cardRow}>
            <div>
                <p>Species: {specie}</p>
                <p>Gender: {gender}</p>
                <p>House: {house}</p>
                <p>Date of birth: {dateOfBirth}</p>
                <p>Ancestry: {ancestry}</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
            <img src={image} alt={name + ' photo'} className={style.characterImg}/>
        </div>
    </div>
  )
}

export default Card