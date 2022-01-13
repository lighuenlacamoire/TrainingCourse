/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { employeesListRequest } from '../../services/employees';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/actions/status';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardsList from './CardsList';
import { screens } from '../../constants';
import { Button, Container } from 'react-bootstrap';

const SearchForm = () => {
  /** Dispatch de Redux */
  const dispatch = useDispatch();  
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState();

  const searchList = () => {
    dispatch(setLoading(screens.employeesListScreen, true));
    employeesListRequest()
      .then(async (response) => {
        if (response && response.results) {
          setData(response);
        }
      })
      .catch((error) => {
        setData();
        console.log(error);
      })
      .finally(() => dispatch(setLoading(screens.employeesListScreen, false)));
  }

  useEffect(() => {
    searchList();
  }, []);

  return (
    <div className='search-form-gs' >
      <h1>{"Listado"}</h1>      
      <Row className="d-inline-flex flex-row search-gs" >
        <Col md="6">
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
        <Col md="3">
          <Button
            className="border-gs search-controls"
      variant="primary"
      onClick={() => console.log()}
            block
          >
            {"Search"}
          </Button>
        </Col>
      </Row>
      <Row className="w-100">
        <Col xs="12">
          {data && data?.results.length > 0 ? <CardsList list={data?.results} /> : null}
        </Col>
      </Row>
    </div>
  );
}
export default SearchForm;