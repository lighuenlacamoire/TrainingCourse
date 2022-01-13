import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Card = ({ item }) => {
  return (
    <Row className="d-inline-flex p-2 bg-secondary card-gs border-gs">
      <div>
        
        <span>{item.name}</span>
        <Button
          className="card-gs-button border-gs search-controls"
          variant="primary">{"Eliminar"}</Button>
      </div>
      <div>
        <span>Height: {item.height}</span>
      </div>
      <div>
        <span>Gender: {item.gender}</span>
      </div>
    </Row>
  );
}

export default Card;