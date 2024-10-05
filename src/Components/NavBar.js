import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav>
    <ul>
        <li>
            <Link to = "/products">Productos</Link>
        </li>
        <li>
            <Link to = "/category">Categoria</Link>
        </li>
    </ul>
   </nav>
  )
}

export default NavBar