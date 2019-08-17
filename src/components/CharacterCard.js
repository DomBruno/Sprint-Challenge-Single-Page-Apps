import React from "react";
import {Icon, Card} from 'semantic-ui-react';

export default function CharacterCard(props) {
  const extra = (
    <a>
      <Icon name="tv" />
      {props.episodes} episodes
    </a>
  )


    return (
      

    <Card
      image={props.img}
      header={props.name}
      meta={props.species}
      description={props.location}
      extra={extra}

      />
    );
}
