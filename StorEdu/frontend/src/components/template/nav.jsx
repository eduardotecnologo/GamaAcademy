import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/users">
                <i className="fa fa-user"></i> Usuários
            </Link>
            <Link to="/clients">
                <i className="fa fa-users"></i> Clientes
            </Link>
            <Link to="/products">
                <i className="fa fa-product-hunt"></i> Produtos
            </Link>
        </nav>
    </aside>