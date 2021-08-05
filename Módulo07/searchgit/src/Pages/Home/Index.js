import React, { useState } from 'react';
import * as style from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => {
      const repositories = res.data;
      const repositoriesName = [];
      repositories.map((repository) => (
        repositoriesName.push(repository.name)
      ));
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        history.push('/repositories');
    });
  }
  return (
    <style.Container>
        <style.Input type="text"
              className="usuarioInput"
              placeholder="Nome do usuário"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}/>
        <style.Button
              type="button"
              onClick={handlePesquisa}>
                Search
        </style.Button>
    </style.Container>
  );
}

export default App;
