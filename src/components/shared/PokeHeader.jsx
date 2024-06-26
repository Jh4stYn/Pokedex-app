import React from 'react'
import './styles/pokeHeader.css'
import { useNavigate } from 'react-router-dom'

const PokeHeader = () => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/')
    }    

    return (
        <div className='pokeheader'>
            <div className='pokeheader__red'>
                <figure className='pokeheader__img' onClick={handleClick}>
                    <img src="/assets/pokedex-logo.png" alt="pokedex img" />
                </figure>
            </div>
            <div className='pokeheader__black'>
                <div className='pokeheader__outcircle'>
                    <div className='pokeheader__incircle'></div>
                </div>
            </div>
        </div>
    )
}

export default PokeHeader