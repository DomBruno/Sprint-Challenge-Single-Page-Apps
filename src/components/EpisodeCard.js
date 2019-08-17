import React from "react";
import {Icon, Card} from 'semantic-ui-react';

export default function LocationCard(props) {
  const extra = (
    <a>
      <Icon name="users" />
      {props.characters} characters appeared in this episode.
    </a>
  )


    return (
      

    <Card
      header={props.name}
      meta={props.date}
      description={props.episode}
      extra={extra}

      />
    );
}