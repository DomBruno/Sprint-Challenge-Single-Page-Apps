import React, { useEffect, useState } from "react";
import Axios from 'axios';

export default function LocationsList() 
const [locs, setLocs] = useState({});
  
    useEffect(() => {
      Axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setChars(response.data);
        console.log(locs);
      })
      .catch(error => {
        console.log("error", error);
      });
    }, []);
