import { useParams } from "react-router-dom"
import { useContext} from "react"
import { ApiContext } from "../Context/ApiProvider.jsx"


const BtnPokemonDetalle = () => {

    const {pokemon} = useContext(ApiContext)

    const {nombre} = useParams()
    let pokemonSelected = pokemon.find( pokemonEncontrado => pokemonEncontrado.name === nombre)

    console.log(pokemonSelected)



  return (
    <div className="flex flex-col items-center justify-center text-center min-w-full mt-10">
        <div className="grid gap-4 grid-cols-2 mt-10">
          <div><img src={pokemonSelected?.sprites.other.dream_world.front_default} alt="pikachu" /></div>
          <div>
            <h1 className="text-3xl text-indigo-800 font-bold uppercase">{pokemonSelected?.name}</h1>
            <ul>
              <li className="uppercase font-bold"><span>tipo</span> : {pokemonSelected?.types[0].type.name}</li>
              <li className="uppercase font-bold"><span>experiencia</span> : {pokemonSelected?.base_experience}</li>
              <li className="uppercase font-bold"><span>rapidez</span> : {pokemonSelected?.order}</li>
              </ul>
            </div>
          
        </div>
    </div>
  )
}

export default BtnPokemonDetalle