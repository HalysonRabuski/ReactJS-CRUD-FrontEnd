import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="produtos">
            <div>Produtos</div>
          </Link>
        </li>
        <li>
          <Link to="carrinho">
            <div>Carrinho</div>
          </Link>
        </li>
        <li>
          <Link to="compras">
            <div>Compras</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
