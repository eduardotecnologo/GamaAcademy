import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as style from './styled';

export default function Repositories(){
  const history = useHistory();
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName !== null){
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
    }else{
      history.push('/');
    }
  }, []);

  return(
    <style.Container>
      <style.Title>Lista de Repositórios</style.Title>
      <style.List>
        { repositories.map( repository => {
          return(
            <style.ListemItem>Repositório: { repository }</style.ListemItem>
          )
        }) }
      </style.List>
      <style.LinkHome to="/">Voltar</style.LinkHome>
    </style.Container>
  );
}