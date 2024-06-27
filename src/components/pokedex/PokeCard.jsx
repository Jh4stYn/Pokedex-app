import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {
    const [pokemon, getPokemon] = useFetch()

    const navigate = useNavigate()

    useEffect(() => {
        getPokemon(url) 
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    
    return (
        <article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleClick}>
            <div className={`pokecard__backTop ${pokemon?.types[0].type.name}`}></div>
            <figure className='pokecard__img'>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon img" />
            </figure>
            <div className='pokecard__backBottom'>
                <h3 className={`pokecard__name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <ul className='pokecard__types'>
                    {
                        pokemon?.types.map(type => (
                            <li className={`slot${type.slot}`} key={type.type.name}>
                                {type.type.name}
                            </li>
                        ))
                    }
                </ul>
                <span className='pokecard__span'>Type</span>
                <hr className='pokecard__hr'/>
                <ul className='pokecard__stats'>
                    {
                        pokemon?.stats.map(stat => (
                            !stat.stat.name.includes('special') &&
                            <li key={stat.stat.url}>
                                <span>{stat.stat.name}</span>
                                <span className={`pokecard__stats-char ${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default PokeCard