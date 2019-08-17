import React from "react";
import {Card} from 'semantic-ui-react';

export default function CharacterCard(props) {
  console.log(props.data);
    return (
    <Card
      image={props.img}

      />
    );
}
