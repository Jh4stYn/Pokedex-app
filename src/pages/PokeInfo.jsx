import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeInfo.css'

const PokeInfo = () => {
    const [pokemon, getPokemon] = useFetch()
    const { id } = useParams()

    const limitedMoves = pokemon?.moves.slice(0, 25);
    
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`   
        getPokemon(url)
    }, [])
    
    console.log(pokemon)

    return (
        <div className='pokeinfo'>
            <section className='pokeinfo__container'>
                <div className='pokeinfo__backTop'>
                    <figure className='pokeinfo__img'>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon img" />
                    </figure>
                    <div className={`pokeinfo__back ${pokemon?.types[0].type.name}`}></div>
                </div>
                <div className='pokeinfo__id'>
                    <div className='id'>
                        #{id}
                    </div>
                </div>
                <div class={`pokeinfo__name ${pokemon?.types[0].type.name}`}>
                    <hr />
                    <div class="name">{pokemon?.name}</div>
                </div>
                <ul className='pokeinfo__data'>
                    <li>
                        <span>Weight</span>
                        <span>{pokemon?.weight}</span>
                    </li>
                    <li>
                        <span>Heigth</span>
                        <span>{pokemon?.height}</span>
                    </li>
                </ul>
                <ul className='pokeinfo__moredata'>
                    <li className='pokeinfo__types'>
                        <span>Type</span>
                        <div className='pokeinfo__type'>
                            {
                                pokemon?.types.map(type => (                     
                                    <li className={`pokeinfo__type-item ${type.type.name}`} key={type.type.name}>
                                        {type.type.name}
                                    </li>                                   
                                ))
                            }
                        </div>  
                    </li>
                    <li className='pokeinfo__skills'>
                        <span>Skills</span>
                        <div className='pokeinfo__skill'>
                            {
                                pokemon?.abilities.map(ability => (
                                        <li key={ability.ability.url}>
                                            {ability.ability.name}
                                        </li>
                                    
                                ))
                            }
                        </div>
                    </li>
                </ul>
                <div class="pokeinfo__title-stats">
                    <hr />
                    <div class="stats">Stats</div>
                    <img src="./assets/pokebola-logo.png" alt="pokebola-logo" />
                </div>
                <div className='pokeinfo__backBottom'>  
                    <ul className='pokeinfo__stats'>
                        {
                            pokemon?.stats.map(stat =>(
                                <li className='pokeinfo__stats-item' key={stat.stat.url}>
                                    <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
                                    <div className='outbar'>
                                        <div className='inbar' style={{width: `${stat.base_stat/2.5}%`}}></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='movements__container'>
                <div className='movements__content'>
                    <div class="movements__title">
                        <hr />
                        <div class="movements">Movements</div>
                    </div>
                    <div >
                        <ul className='movements__list'>
                            {
                                limitedMoves?.map((move) => (
                                    <li className='movements__list-item' key={move.move.url}>
                                        <span>{move.move.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>   
                </div>
            </section>
        </div>
        
    )
}

export default PokeInfo