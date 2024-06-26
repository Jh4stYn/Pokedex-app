import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({setTypeFilter, setInputValue}) => {
    const [types, getTypes] = useFetch()
    const valueSelect = useRef()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        getTypes(url)
    }, [])

    const handleChange = () => {
        setTypeFilter(valueSelect.current.value)
        setInputValue('')
    }

    return (
        <select className='pokeselect' onChange={handleChange} ref={valueSelect}>
            <option value="">All pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>
                        {type.name}
                    </option>
                )) 
            }
        </select>
    )
}

export default PokeSelect