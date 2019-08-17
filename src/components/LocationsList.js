import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

export default function LocationList(props) {
  const [locs, setLocs] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(response => {
      setLocs(response.data.results);
    })
    .catch(error => {
      console.log("error", error);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {locs.map(loc => (
       <LocationCard 
        key={loc.id}
        name={loc.name}
        type={loc.type}
        dimension={loc.dimension}
        residents={loc.residents.length}
        />
    ))}
  </section>
    );
  }
