import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { employeesListRequest } from '../../services/employees';
import { setLoading } from '../../redux/actions/status';
import { employeesSetList } from '../../redux/actions/employees';
import CardsList from './CardsList';
import { screens } from '../../constants';
import { messages } from '../../messages';
import ModalPopUp from '../../components/ModalPopUp';

/**
 * Componente de formulario de Busqueda
 */
const SearchForm = () => {
  /** Dispatch de Redux */
  const dispatch = useDispatch();  
  /** Lista de redux */
  const { list } = useSelector((state) => state.employees);
  /** Lista de redux filtrada */
  const [filteredList, setFilteredList] = useState([]);
  /** Datos del Api */
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [searchText, setSearchText] = useState();

  /**
   * Actualiza la lista de redux
   * @param {Array} newList 
   */
  const updateList = (newList) => {
    dispatch(employeesSetList(newList));
  }

  const updateFilteredList = (text) => {
    const value = text || searchText;
    const listNew = [...(list || [])];
    let listFiltered;
    if (value && value.length > 0) {
      listFiltered = listNew.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .replace(/[\u0300-\u036f]/g, '')
          .includes(value.toLowerCase()),
      );
      setFilteredList(listFiltered);
    } else {
      setFilteredList(list);
    }
  }

  /**
   * Api Call: consulta de registro
   * @param {string} params 
   */
  const searchList = (params) => {
    dispatch(setLoading(screens.employeesListScreen, true));
    employeesListRequest(params)
      .then(async (response) => {
        if (response && response.results) {
          updateList(response.results);
          setData(response);
        }
      })
      .catch((error) => {
        setData();
        alert(`Fallo: ${error}`);
        console.log(error);
      })
      .finally(() => dispatch(setLoading(screens.employeesListScreen, false)));
  }

  /**
   * Pop del modal para verificar la eliminacion del item
   * @param {Object} item 
   */
  const deleteItem = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  }

  /**
   * Elimina el item de la lista de redux
   * @param {Object} item 
   */
  const removeItem = () => {
    setShowModal(false);
    dispatch(setLoading(screens.employeesListScreen, true))
    try {
      if (selectedItem && selectedItem.name) {
        const newList = [...list];
        const idx = newList.findIndex((m) => m.name === selectedItem.name);
        if (idx !== -1) {
          newList.splice(idx, 1);
          updateList(newList);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSelectedItem();
      dispatch(setLoading(screens.employeesListScreen, false));
    }
  }

  useEffect(() => {
    updateFilteredList();
  }, [JSON.stringify(list)]);

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
            onClick={() => updateFilteredList()}
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
            Actualizar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {list && list.length > 0 ?
            <CardsList
              onDelete={deleteItem}
              list={filteredList} />
            : null}
        </Col>
      </Row>
      <ModalPopUp
        isVisible={showModal}
        header="Confirmacion"
        content="Esta seguro que desea continuar?"
        onBackdropPress={() => setShowModal(false)}
        onPressSecondary={() => setShowModal(false)}
        onPressPrimary={() => removeItem()}
      />
    </div>
  );
}
export default SearchForm;