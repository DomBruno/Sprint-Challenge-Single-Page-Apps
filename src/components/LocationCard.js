import React from "react";
import {Icon, Card} from 'semantic-ui-react';

export default function LocationCard(props) {
  const extra = (
    <a>
      <Icon name="users" />
      {props.residents} residents
    </a>
  )


    return (
      

    <Card
      header={props.name}
      meta={props.type}
      description={props.dimension}
      extra={extra}

      />
    );
}