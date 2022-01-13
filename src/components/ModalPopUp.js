import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { generics as genericsMessages, messages } from '../messages';

/**
 * Modal generico
 */
const ModalPopUp = (props) => {  
  const {
    header,
    content,
    isVisible,
    onBackdropPress,
    onPressPrimary,
    onPressSecondary
  } = props;

  return (
    <Modal
      animation={false}
      show={isVisible}
      onHide={onBackdropPress}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        {content}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onPressSecondary}>
          {messages.no}
        </Button>
        <Button variant="primary" onClick={onPressPrimary}>
          {messages.yes}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPopUp;
