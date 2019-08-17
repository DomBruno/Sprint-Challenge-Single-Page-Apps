import React, { useEffect, useState } from "react";
import axios from "axios";
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
        key={char.id}
        img={char.image}
        name={char.name}
        species={char.species}
        location={char.location.name}
        origin={char.origin.name}
        episodes={char.episode.length}
        />
    ))}
  </section>
    );
  }