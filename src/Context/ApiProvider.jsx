import {createContext,useState,useEffect} from 'react'
import axios from 'axios'

export const ApiContext = createContext()



const ApiProvider = ({children}) => {

    const [pokemon, setPokemon] = useState([])

     const obtenerPokemones = async () => {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon'
            const {data} = await axios.get(url)
            
            const promises = data.results.map(async (pokemon) => {
                const {data} = await axios.get(pokemon.url)
                return data
            })
            const results = await Promise.all(promises)

            setPokemon(results)

        } catch (error) {
            console.log(error)
            
        }
        
    }


    useEffect(() => {
        obtenerPokemones()
        
    }, [])


  return (
    <ApiContext.Provider value={{pokemon}}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider

