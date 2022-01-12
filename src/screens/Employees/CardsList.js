import React from 'react';
import Card from "./Card";

/**
 * Componente de lista
 * @param {Array} list Lista de empleados
 */
const CardsList = ({ list }) => {
  console.log("list", list);
  return (
    <div className="d-flex flex-column align-items-center">
      {list && list.length > 0 ?
        list.map((item) => <Card item={item} />) : null}
    </div>
  );
}

export default CardsList;