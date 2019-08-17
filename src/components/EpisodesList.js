import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard';

export default function EpisodesList(props) {
  const [eps, setEps] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(response => {
      setEps(response.data.results);
    })
    .catch(error => {
      console.log("error", error);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {eps.map(ep => (
       <EpisodeCard 
        key={ep.id}
        name={ep.name}
        date={ep.air_date}
        episode={ep.episode}
        characters={ep.characters.length}
        />
    ))}
  </section>
    );
  }
