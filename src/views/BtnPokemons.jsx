import { useContext ,useState } from "react"
import { ApiContext } from "../Context/ApiProvider.jsx"
import { useNavigate } from "react-router-dom"


const BtnPokemons = () => {
  const {pokemon} = useContext(ApiContext)

  const navigate = useNavigate()

  const [busqueda,setBusqueda] = useState({
    nombre: '',
  })

  const [alerta,setAlerta] = useState('')

  

  console.log(pokemon)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(busqueda)
    if (Object.values(busqueda).includes('')) {
      setAlerta( 'debe seleccionar un pokemon' )
      return

    } else {

      navigate(`/btn-pokemons/${busqueda.nombre}`)
      
      setAlerta('')

    }
    
  }

  return (
    <form className="text-center mt-10" onSubmit={handleSubmit}>
      <h1 className="text-3xl text-indigo-800 font-bold uppercase ">seleciona un pokemon</h1>
     <div className="flex flex-col items-center">
     <select 
     name="nombre" 
     id="selectPokemon"
     value={busqueda.nombre} 
     onChange={e => setBusqueda({
       ...busqueda,
       [e.target.name]: e.target.value
     })}
     className="border font-bold mt-10 text-center">

        <option value=""> -- seleciona un poekemon --</option> 
        {pokemon.map((poke) => (
          <option value={poke.name} key={poke.id}>{poke.name}</option>
        ))}
       
      </select>

      <button className="border rounded-md font-bold mt-10 text-center" type="submit">ver detalle</button>

     </div>
     {alerta && <div className="flex flex-col items-center mt-16">
      <img src={pokemon[5].sprites.front_default} alt={pokemon.name} className="w-60"/>
      <p className="text-red-600 font-bold mt-10">{alerta}</p>
      </div>  }
  
    </form>
  )
}

export default BtnPokemons