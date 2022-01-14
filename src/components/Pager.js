import React from 'react';
import { Pagination } from 'react-bootstrap';

/**
 * Componente de paginador
 */
const Pager = (props) => {
  const {
    onPageFirst,
    onPagePrevious,
    onPageNext,
  } = props;

  return (
    <div className="w-100 d-flex justify-content-center">
      <Pagination size="lg">
        <Pagination.First
          disabled={!onPagePrevious}
          onClick={onPageFirst}
        >
          {"Inicio"}
        </Pagination.First>
        <Pagination.Prev
          disabled={!onPagePrevious}
          onClick={onPagePrevious}
        >
          {"Atras"}
        </Pagination.Prev>
        <Pagination.Next
          disabled={!onPageNext}
          onClick={onPageNext}
        >
          {"Siguiente"}
        </Pagination.Next>
      </Pagination>
    </div>
  )
}

export default Pager;
