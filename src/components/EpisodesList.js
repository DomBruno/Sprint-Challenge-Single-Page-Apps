import React, { useEffect, useState } from "react";
import Axios from 'axios';

export default function EpisodesList() 
const [epss, setEps] = useState({});
  
    useEffect(() => {
      Axios
      .get("https://rickandmortyapi.com/api/episodes/")
      .then(response => {
        setChars(response.data);
        console.log(eps);
      })
      .catch(error => {
        console.log("error", error);
      });
    }, []);