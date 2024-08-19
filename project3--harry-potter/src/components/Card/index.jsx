import React from 'react'
import style from './style.module.css'

function Card({name, specie, gender, house, dateOfBirth, ancestry, eye, hair, image}) {
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
                <p>Eye Colour: {eye}</p>
                <p>Hair Colour: {hair}</p>
            </div>
            <img src={image} alt={name + ' photo'} />
        </div>
    </div>
  )
}

export default Card