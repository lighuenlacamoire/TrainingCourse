import React from 'react';
import Card from "./Card";

/**
 * Componente de lista
 * @param {Array} list Lista de empleados
 * @param {Function} onDelete Elimina un item de la lista
 */
const CardsList = ({ list, onDelete }) => {
  return (
    <div className="d-flex flex-column">
      {list && list.length > 0 ?
        list.map((item) =>
          <Card
            key={item.name}
            item={item}
            onDelete={onDelete}
          />
        ) : null}
    </div>
  );
}

export default CardsList;