import React, { useEffect, useState } from 'react';
import * as style from './styled';

export default function Repositories(){
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
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
    </style.Container>
  );
}