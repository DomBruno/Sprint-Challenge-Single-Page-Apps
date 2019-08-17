import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Image} from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
    const [chars, setChars] = useState({});
  
    useEffect(() => {
      Axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setChars(response.data);
        console.log(chars);
      })
      .catch(error => {
        console.log("error", error);
      });
    }, []);
  
    return (
      <section className="character-list grid-view">
        <h2>
        {props.chars.map(char => (
                  )}
        </h2>
      </section>
    );
  }