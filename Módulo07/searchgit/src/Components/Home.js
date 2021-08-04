import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

function App(props) {
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => console.log(res.data));
    }
  return (
    <>
        <input type="text"
              className="usuarioInput"
              placeholder="Nome do usuário"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}/>
        <button
              type="button"
              onClick={handlePesquisa}>
                Search
        </button>
    </>
  );
}

export default App;
