import React, { useEffect, useState } from "react";
import axios from "axios";
import {Image} from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const [chars, setChars] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setChars(response.data.results);
      console.log(chars);
    })
    .catch(error => {
      console.log("error", error);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {chars.map(char => (
       <CharacterCard 
        key={character.id}
        img={char.image}
        name={char.name}
        status={char.status}
        location={char.location.name}
        origin={char.origin.name}
        />
    ))}
  </section>
    );
  }