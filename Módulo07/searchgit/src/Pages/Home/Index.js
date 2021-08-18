import React, { useState } from 'react';
import * as style from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(res => {
      const repositories = res.data;
      const repositoriesName = [];
      repositories.map((repository) => (
        repositoriesName.push(repository.name)
      ));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
        .catch(err => {
        setErro(true);
    });
  }
  return (

      <style.HomeContainer>
        <style.Content>
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
        </style.Content>

        { erro ?  <style.ErrorMessage>Ocorreu um erro, tente novamente!</style.ErrorMessage> : ''  }
      </style.HomeContainer>

  );
}

export default App;
