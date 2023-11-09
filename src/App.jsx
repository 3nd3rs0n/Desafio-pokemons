import {Routes,Route,Navigate} from 'react-router-dom'
import Inicio from "./components/Inicio"
import BtnInicio from './views/BtnInicio'
import BtnPokemons from './views/BtnPokemons'
import ApiProvider from './Context/ApiProvider.jsx'
import BtnPokemonDetalle from './views/BtnPokemonDetalle.jsx'

const App = () => {
  return (
    <ApiProvider>
      <Routes>
        <Route path='/' element={<Inicio/>}>
        <Route index element={<BtnInicio/>}/>
        <Route path='/btn-pokemons' element={<BtnPokemons/>}/>
        <Route path='/btn-pokemons/:nombre' element={<BtnPokemonDetalle/>}/>
        </Route>

        <Route path='*' element={<Navigate to='/'/>}/>

      </Routes>
      
      
    </ApiProvider>

  )
}

export default App