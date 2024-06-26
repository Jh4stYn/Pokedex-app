import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {

    const textInput = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const input = textInput.current.value.trim()
        dispatch(setTrainer(input))
        textInput.current.value = ''
        navigate('/pokedex')
    }

    return (    
        <div className='homepage'>
            <figure className='homepage__logo'>
                <img src="/assets/pokedex-logo.png" alt="pokedex img" />
            </figure>
            <h2 className='homepage__h2'>Hi trainer</h2>
            <p className='homepage__p'>to start give me your name</p>
            <form className='homepage__form'>
                <input ref={textInput} type="text" placeholder='Your name...' autoFocus/>
                <button onClick={handleSubmit}>Start</button>
            </form>
        </div>
    )
}

export default HomePage