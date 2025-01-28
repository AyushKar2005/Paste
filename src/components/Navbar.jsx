import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
    
        <NavLink className={"home"}
         to="/">
            Home
         </NavLink>
         <NavLink className={"home"}to="/pastes">
            Pastes
         </NavLink>
    </div>
  )
}

export default Navbar