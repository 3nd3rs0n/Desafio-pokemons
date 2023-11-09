import {NavLink, Outlet} from 'react-router-dom'


const Inicio = () => {

    const setActiveClass = ({isActive}) => ( isActive ? 'text-white' : undefined )
   

   


  return (
    <>
    <nav className='bg-gradient-to-r from-indigo-500 to-indigo-800 md:min-w-screen h-24'>
        <div className='text-center p-9 '>
            <NavLink to="/" className={setActiveClass} > <span className='uppercase font-bold'> home</span> </NavLink>
            <NavLink to="/btn-pokemons" className={setActiveClass}> <span className='uppercase font-bold'> pokemones </span>  </NavLink>
        </div>
        
    </nav>

    <Outlet/>
    
    </>
  )
}

export default Inicio