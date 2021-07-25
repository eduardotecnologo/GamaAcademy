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
                <i className="fa fa-users"></i> Usuários
            </Link>
            <Link to="/client">
                <i className="fa fa-users"></i> Clientes
            </Link>
            <Link to="/product">
                <i className="fa fa-store"></i> Produtos
            </Link>
        </nav>
    </aside>