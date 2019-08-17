import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Image} from 'semantic-ui-react';

export default function CharacterList(props) {
  const [chars, setChars] = useState({});
  
  useEffect(() => {
    
    })
  })

  useEffect(() => {
    Axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setChars(response.data);
      console.log(chars);
    })
    .catch(error => {
      return (
        "Loading Files..."
      )
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [chars]);

  return (
      <section className="character-list grid-view">
      {props.chars.map(char => (
        <div>
          <Image src={char.image} />
          <h2>{char.name}</h2>
          
        </div>

      
      <h2></h2>
    </section>
  );
}
