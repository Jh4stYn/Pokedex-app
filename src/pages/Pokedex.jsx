import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedex/PokeCard'
import PokeSelect from '../components/pokedex/PokeSelect'
import './styles/pokedex.css'
import Paginate from '../components/pokedex/Paginate'

const Pokedex = () => {
    const trainer = useSelector(store => store.trainer)
    const [inputValue, setInputValue] = useState('')
    const [numberValue, setNumberValue] = useState('8')
    const [page, setPage] = useState(1)
    const [typeFilter, setTypeFilter] = useState('')
    const [pokemons, getPokemons, getTypes] = useFetch()
    
    useEffect(() => {
        if (typeFilter) {
            getTypes(typeFilter)
        } else {
            const url = `https://pokeapi.co/api/v2/pokemon/?limit=1302`
            getPokemons(url)
        }
    }, [typeFilter, numberValue])
    
    const textInput = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue(textInput.current.value.trim(). toLowerCase())
        textInput.current.value = ''
    }

    const cbFilter = poke => {
        return poke.name.includes(inputValue)
    }

    const numberInput = useRef()
    const handleSubmitNumber = (event) => {
        event.preventDefault()
        setNumberValue(numberInput.current.value)
        numberInput.current.value = ''
    }
    
    const totalPages = Math.ceil(pokemons?.results.filter(cbFilter).length / numberValue)
    const pagination = () => {
        const end = numberValue * page
        const start = end - numberValue
        const poke = pokemons?.results.filter(cbFilter).slice(start, end)
        return [poke]
    }
    
    console.log(pokemons?.results.filter(cbFilter).length)

    return (
        <div className='pokedex'>
            <h3 className='pokedex__wave'><span>Welcome {trainer}, </span>here you can find your favorite pokemon, let's go!!</h3>
            <div className='pokedex__filters'>
                <form className='pokedex__form' onSubmit={handleSubmit}>
                    <input ref={textInput} type="text" placeholder='Search a pokémon'/>
                    <button>Search</button>
                </form>
                <PokeSelect
                    setTypeFilter={setTypeFilter}
                    setInputValue={setInputValue}
                />
                <form className='pokedex__form-number' onSubmit={handleSubmitNumber}>
                    <input ref={numberInput} type="number" placeholder='N° Pokemons'/>
                    <button>Go</button>
                </form>
            </div>
            <div className='pokedex__container'>
                {
                    pagination()[0]?.map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
            <Paginate
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default Pokedex