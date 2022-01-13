import React from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import { employeeMessages, messages } from '../../messages';

/**
 * componente de tarjeta con los datos del empleado
 * @param {Object} item datos del empleado 
 * @param {Function} onDelete Elimina un item de la lista
 */
const Card = ({ item, onDelete }) => {
  return (
    <Row className="d-inline-flex card-gs border-gs">
      <Col>
        <Row>
          <span className='h5'>{item.name}</span>
        </Row>
        <Row>
          <span>{`${employeeMessages.height}: ${item.height}`}</span>
        </Row>
        <Row>
          <span>{`${employeeMessages.gender}: ${item.gender}`}</span>
        </Row>
      </Col>
      <Col>
        <Button
          className="card-gs-button border-gs search-controls"
          variant="primary"
          onClick={() => onDelete(item)}
        >
          {messages.delete}
        </Button>
      </Col>
    </Row>
  );
}

export default Card;