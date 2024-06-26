
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeFooter from './components/shared/PokeFooter'

function App() {

  return (
    <div className='app'>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='/' element=
          {
            <div className="home-layout">
              <HomePage />
              <PokeFooter />
            </div>
          } 
        />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokeInfo/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
