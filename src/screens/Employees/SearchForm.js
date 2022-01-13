/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { employeesListRequest } from '../../services/employees';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/actions/status';
import { employeesSetList } from '../../redux/actions/employees';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardsList from './CardsList';
import { screens } from '../../constants';
import { Button } from 'react-bootstrap';
import { messages } from '../../messages';

/**
 * Componente de formulario de Busqueda
 */
const SearchForm = () => {
  /** Dispatch de Redux */
  const dispatch = useDispatch();  
  const { list } = useSelector((state) => state.employees);
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState();

  const updateList = (newList) => {
    dispatch(employeesSetList(newList));
  }

  const searchList = () => {
    dispatch(setLoading(screens.employeesListScreen, true));
    employeesListRequest()
      .then(async (response) => {
        if (response && response.results) {
          updateList(response.results);
          setData(response);
        }
      })
      .catch((error) => {
        setData();
        console.log(error);
      })
      .finally(() => dispatch(setLoading(screens.employeesListScreen, false)));
  }


  /**
   * Elimina el item de la lista de redux
   * @param {Object} item 
   */
  const deleteItem = (item) => {
    if (item && item.name) {
      const newList = [...list];
      const idx = newList.findIndex((m) => m.name === item.name);
      if (idx !== -1) {
        newList.splice(idx, 1);
        updateList(newList);
      }
    }
  }

  useEffect(() => {
    searchList();
  }, []);

  return (
    <div className='search-form-gs' >
      <h1>{messages.list}</h1>
      <Row md="12">
        <Col md="3">
          <Form.Group controlId="searchGroup">
            <Form.Control
              className='border-gs search-controls'
              type="text"
              name="searchText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md="2">
          <Button
            className="border-gs search-controls"
            variant="primary"
            onClick={() => console.log()}
            block
          >
            {messages.search}
          </Button>
        </Col>
        <Col md="2">
          <Button
            className="border-gs search-controls"
            variant="info"
            onClick={() => searchList()}
            block
          >
            {"Actualizar"}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='search-form-gs'>
          {list && list.length > 0 ?
            <CardsList
              onDelete={deleteItem}
              list={list} />
            : null}
        </Col>
      </Row>
    </div>
  );
}
export default SearchForm;